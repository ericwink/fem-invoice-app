import axios from 'axios'
import { allInvoices } from '../store'

async function getInvoices() {
    try {
        const results = await axios.get("http://localhost:3000/invoices");
        allInvoices.update(current => (current = results.data));
    } catch (error) {
        console.log(error)
    }
}

async function getInvoiceDetail(id) {
    let result = await axios.get(`http://localhost:3000/invoices/${id}`);
    return result
}

export { getInvoices, getInvoiceDetail }