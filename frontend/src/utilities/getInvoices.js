import axios from 'axios'
import { allInvoices } from '../store'

async function getInvoices() {
    const results = await axios.get("http://localhost:3000/invoices");
    allInvoices.update(current => (current = results.data));
}



export { getInvoices }