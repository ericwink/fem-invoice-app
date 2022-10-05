const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors')
const mongoose = require('mongoose')

const { Invoice } = require('./models/invoiceSchema.js')

async function connectMongoose() {
    try {
        await mongoose.connect('mongodb://localhost:27017/invoiceapp')
        console.log('Invoice Database Connected')
    } catch (error) {
        console.log(error)
    }
}
connectMongoose()

let prefix = 'AB'
let suffix = 1001

function updateID() {

}

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

//retrieve and send all invoices in DB
app.get('/invoices', async (req, res) => {
    //pull invoices form DB
    try {
        const results = await Invoice.find()
        res.send(results)
    } catch (error) {
        console.log(error)
    }
})
//retrieve and send invoice by ID
app.get('/invoices/:id', async (req, res) => {
    //pull invoices form DB
    const invoiceID = (req.params.id)
    console.log(invoiceID)
    try {
        const results = await Invoice.findOne({ id: invoiceID })
        // const results = await Invoice.findById(invoiceID)
        res.send(results)
    } catch (error) {
        console.log(error)
    }
})

// save an invoice
app.post('/save', async (req, res) => {
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
        newInvoice.id = (prefix + suffix)
        suffix = suffix + 1
        await newInvoice.save()
        //check if invoice reiceved is a draft
        if (invoice.status === 'draft') {
            res.send(`Draft saved successfully! Invoice ID: ${newInvoice.id}`)
        } else {
            res.send(`Invoice saved successfully! Invoice ID: ${newInvoice.id}`)
        }
    } catch (error) {
        console.log(error)
    }
})

// mark current invoice as 'paid'
app.post('/paid', async (req, res) => {
    try {
        const invoice = req.body.invoice
        const result = await Invoice.findById(invoice._id)
        result.status = 'paid'
        await result.save()
        res.send(`${invoice.id} has been marked as paid`)
    } catch (error) {
        console.log(error)
    }
})

// delete a current invoice
app.delete('/delete', async (req, res) => {
    try {
        const invoice = req.body.invoice
        await Invoice.findByIdAndDelete(invoice._id)
        res.send(`${invoice.id} has been deleted`)
    } catch (error) {
        console.log(error)
    }
})

// confirm server is active
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})