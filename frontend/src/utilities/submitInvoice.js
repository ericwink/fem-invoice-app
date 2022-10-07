import axios from 'axios'
import { globalMessage } from '../store'
// const route = 'http://localhost:3000'
const route = 'https://jade-cautious-hummingbird.cyclic.app'



//submit invoice to server based on submission type/endpoint
async function submitInvoice(invoice, endpoint) {
    //evaluate type of submission
    //if draft
    try {
        if (endpoint === 'draft') {
            //send to draft endpoint  
            const response = await axios.post(`${route}/save`, {
                invoice: invoice,
            });
            globalMessage.update(current => (current = response.data));
        }
        //if final:
        if (endpoint === 'final') {
            //update status to pending
            invoice.status = 'pending'
            //send to newInvoice endpoing
            const response = await axios.post(`${route}/save`, {
                invoice: invoice,
            });
            globalMessage.update(current => (current = response.data));
        }
        //if delete
        if (endpoint === 'delete') {
            //send to delete endpoint
            const response = await axios.delete(`${route}/delete`, {
                data: { invoice: invoice },
            });
            globalMessage.update(current => (current = response.data));
        }
        if (endpoint === 'paid') {
            //send to delete endpoint
            const response = await axios.post(`${route}/paid`, {
                invoice: invoice,
            });
            globalMessage.update(current => (current = response.data));
        }

    } catch (error) {
        globalMessage.update(current => (current = `${error.message}, please try again later`));
    }
}

export { submitInvoice }
