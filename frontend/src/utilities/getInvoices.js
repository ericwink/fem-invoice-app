import axios from 'axios'
import { allInvoices, globalMessage } from '../store'
// const route = 'http://localhost:3000'
const route = 'https://jade-cautious-hummingbird.cyclic.app'

async function getInvoices() {
    try {
        const results = await axios.get(`${route}/invoices`);
        allInvoices.update(current => (current = results.data));
    } catch (error) {
        globalMessage.update(current => (current = `${error.message}, please refresh and try again`));
        allInvoices.update(current => (current = ['error']));
    }
}

async function getInvoiceDetail(id) {
    try {
        let result = await axios.get(`${route}/invoices/${id}`);
        return result.data
    } catch (error) {
        globalMessage.update(current => (current = `${error.message}, please click OK to try again`));
    }
}

export { getInvoices, getInvoiceDetail }