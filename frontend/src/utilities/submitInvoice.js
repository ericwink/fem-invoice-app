import axios from 'axios'
import { globalMessage } from '../store'


//submit invoice to server based on submission type/endpoint
async function submitInvoice(invoice, endpoint) {
    //evaluate type of submission
    //if draft
    try {
        if (endpoint === 'draft') {
            //send to draft endpoint  
            const response = await axios.post("http://localhost:3000/save", {
                invoice: invoice,
            });
            globalMessage.update(current => (current = response.data));
        }
        //if final:
        if (endpoint === 'final') {
            //update status to pending
            invoice.status = 'pending'
            //send to newInvoice endpoing
            const response = await axios.post("http://localhost:3000/save", {
                invoice: invoice,
            });
            globalMessage.update(current => (current = response.data));
        }
        //if delete
        if (endpoint === 'delete') {
            //send to delete endpoint
            const response = await axios.delete("http://localhost:3000/delete", {
                data: { invoice: invoice },
            });
            globalMessage.update(current => (current = response.data));
        }
        if (endpoint === 'paid') {
            //send to delete endpoint
            const response = await axios.post("http://localhost:3000/paid", {
                invoice: invoice,
            });
            globalMessage.update(current => (current = response.data));
        }

    } catch (error) {
        console.log(error);
    }
}

export { submitInvoice }
