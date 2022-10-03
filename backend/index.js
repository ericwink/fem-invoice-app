const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors')

//send all invoice data

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

// create new invoice
app.post('/new', (req, res) => {
    const invoice = req.body.invoice
    console.log(invoice)
    //check if draft
    if (invoice.status === 'draft') {
        res.send('Draft recieved')
    }
    else {
        res.send('Invoice recieved')
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