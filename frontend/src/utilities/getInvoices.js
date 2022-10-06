import axios from 'axios'
import { allInvoices } from '../store'
// const route = 'http://localhost:3000'
const route = 'https://jade-cautious-hummingbird.cyclic.app'

async function getInvoices() {
    try {
        const results = await axios.get(`${route}/invoices`);
        allInvoices.update(current => (current = results.data));
    } catch (error) {
        console.log(error)
    }
}

async function getInvoiceDetail(id) {
    let result = await axios.get(`${route}/invoices/${id}`);
    console.log(result.data)
    return result.data
}

export { getInvoices, getInvoiceDetail }