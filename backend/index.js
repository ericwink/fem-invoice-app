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
        console.log('invoices sent to client')
    } catch (error) {
        console.log(error)
    }
})

// create new invoice
app.post('/new', async (req, res) => {
    const invoice = req.body.invoice
    let editInvoice = await Invoice.findById(invoice._id)
    try {
        if (editInvoice) {
            await Invoice.findOneAndReplace(
                { _id: invoice._id },
                invoice)
            return res.send('Invoice edited')
        }
        //check if invoice reiceved is a draft
        if (invoice.status === 'draft') {
            res.send('Draft recieved')
        }
        //save new invoice
        const newInvoice = new Invoice(invoice)
        await newInvoice.save()
        console.log(newInvoice)
        res.send('Invoice recieved')
    } catch (error) {
        console.log(error)
    }
})

// edit a current invoice
app.post('/edit', async (req, res) => {

    try {
        const invoice = req.body.invoice
        const result = await Invoice.findById(invoice._id)
        result = invoice
        await result.save()
        console.log(`${invoice._id} edited`)
        res.send(`${invoice._id} edited`)
    } catch (error) {

    }
})

// mark current invoice as 'paid'
app.post('/paid', async (req, res) => {
    try {
        const invoice = req.body.invoice
        const result = await Invoice.findById(invoice._id)
        result.status = 'paid'
        await result.save()
        console.log(`${invoice._id} marked as paid`)
        res.send(`${invoice._id} marked as paid`)
    } catch (error) {
        console.log(error)
    }
})

// delete a current invoice
app.delete('/delete', async (req, res) => {
    try {
        const invoice = req.body.invoice
        await Invoice.findByIdAndDelete(invoice._id)
        console.log(`${invoice._id} deleted`)
        res.send(`${invoice._id} deleted`)
    } catch (error) {
        console.log(error)
    }
})

// confirm server is active
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})