const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors')

//get new receiving an invoice
//get update invoice
//delete an invoice
//update an invoice
//send all invoice data

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/newinvoice', (req, res) => {
    console.log(req)
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})