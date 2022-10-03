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
    const results = await Invoice.find()
    res.send(results)
})

// create new invoice
app.post('/new', async (req, res) => {
    const invoice = req.body.invoice
    try {
        //check if invoice reiceved is a draft
        if (invoice.status === 'draft') {
            res.send('Draft recieved')
        }
        //otherwise, save as a fully new invoice
        else {
            const newInvoice = new Invoice(invoice)
            await newInvoice.save()
            console.log(newInvoice)
            res.send('Invoice recieved')
        }
    } catch (error) {
        console.log(error)
    }
})

// edit a current invoice
app.post('/edit', (req, res) => {
    const invoice = req.body.invoice
    const invoiceID = invoice.id
    console.log(`${invoiceID} edited`)
    res.send(`${invoiceID} edited`)
})

// mark current invoice as 'paid'
app.post('/paid', (req, res) => {
    const invoice = req.body.invoice
    const invoiceID = invoice.id
    console.log(`${invoiceID} marked as paid`)
    res.send(`${invoiceID} marked as paid`)
})

// delete a current invoice
app.delete('/delete', (req, res) => {
    const invoice = req.body.invoice
    console.log(`${invoice.id} deleted`)
    res.send(`${invoice.id} deleted`)
})

// confirm server is active
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})