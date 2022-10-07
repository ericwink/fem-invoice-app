const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// const data = require('./data.json')

const { Invoice } = require('./models/invoiceSchema.js')
const demoInvoices = ['RT3080', 'XM9141', 'RG0314', 'RT2080', 'AA1449', 'TY9141', 'FV2353']
const mongoLink = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_SECRET}@cluster0.1sbqg.mongodb.net/?retryWrites=true&w=majority`

async function connectMongoose() {
    try {
        // await mongoose.connect('mongodb://localhost:27017/invoiceapp')
        await mongoose.connect(mongoLink)
        console.log('Invoice Database Connected')
    } catch (error) {
        console.log(error)
    }
}
connectMongoose()


// function addData() {
//     for (const invoice of data) {
//         let toSave = new Invoice(invoice)
//         toSave.save()
//     }
// }
// addData()

//due to hosting location spin-down, need to create dynamic ID
async function calculateInvoiceID() {
    //look through all invoices
    let result = await Invoice.find({})
    let finalID = result[result.length - 1].id
    //if final invoice starts with AB, generate next invoice ID
    if (finalID.includes('AB')) {
        //split to get the number, which is a string
        let num = parseInt(finalID.split('B')[1])
        //add one to get next invoice ID
        num = num + 1
        //return final invoice ID
        return `AB${num}`
        // if last invoice isn't AB, return AB1001
    } else {
        return 'AB1001'
    }
}

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//checks to see if invoice is part of demo array, and if so, deny action
const checkDemo = function (req, res, next) {
    const invoice = req.body.invoice
    if (demoInvoices.indexOf(invoice.id) >= 0) {
        res.send('This invoice is for demonstration purposes and cannot be edited. Please make a new invoice to test features!')
        return
    }
    next()
}

//routes
app.get('/', (req, res) => {
    res.send('Hello World - InvoiceApp API!')
})

//retrieve and send all invoices in DB
app.get('/invoices', async (req, res) => {
    //pull invoices form DB
    try {
        const results = await Invoice.find()
        res.send(results)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})
//retrieve and send invoice by ID
app.get('/invoices/:id', async (req, res) => {
    //pull invoices form DB
    const invoiceID = (req.params.id)
    try {
        const results = await Invoice.findOne({ id: invoiceID })
        // const results = await Invoice.findById(invoiceID)
        res.send(results)
    } catch (error) {
        console.log(error)
        res.send(error._message)
    }
})

// save an invoice
app.post('/save', checkDemo, async (req, res) => {
    const invoice = req.body.invoice
    let editInvoice = await Invoice.findById(invoice._id)
    try {
        if (editInvoice) {
            await Invoice.findOneAndReplace(
                { _id: invoice._id },
                invoice)
            return res.send(`Invoice ${invoice.id} has been updated!`)
        }
        //save new invoice
        const newInvoice = new Invoice(invoice)
        newInvoice.id = await calculateInvoiceID()
        await newInvoice.save()
        //check if invoice reiceved is a draft
        if (invoice.status === 'draft') {
            res.send(`Draft saved successfully! Invoice ID: ${newInvoice.id}`)
        } else {
            res.send(`Invoice saved successfully! Invoice ID: ${newInvoice.id}`)
        }
    } catch (error) {
        console.log(error)
        res.send(error._message)
    }
})

// mark current invoice as 'paid'
app.post('/paid', checkDemo, async (req, res) => {
    const invoice = req.body.invoice
    try {
        const result = await Invoice.findById(invoice._id)
        result.status = 'paid'
        await result.save()
        res.send(`${invoice.id} has been marked as paid`)
    } catch (error) {
        console.log(error)
        res.send(error._message)
    }
})

// delete a current invoice
app.delete('/delete', checkDemo, async (req, res) => {
    const invoice = req.body.invoice
    try {
        await Invoice.findByIdAndDelete(invoice._id)
        res.send(`${invoice.id} has been deleted`)
    } catch (error) {
        console.log(error)
        res.send(error._message)
    }
})

// confirm server is active
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})