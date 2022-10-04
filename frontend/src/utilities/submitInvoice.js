import axios from 'axios'

//submit invoice to server based on submission type/endpoint
async function submitInvoice(invoice, endpoint) {
    //evaluate type of submission
    //if draft
    try {
        if (endpoint === 'draft') {
            //send to draft endpoint  
            const response = await axios.post("http://localhost:3000/new", {
                invoice: invoice,
            });
            alert(response.data);
        }
        //if final:
        if (endpoint === 'final' && invoice.id === 'tempID') {
            //update status to pending
            invoice.status = 'pending'
            //send to newInvoice endpoing
            const response = await axios.post("http://localhost:3000/new", {
                invoice: invoice,
            });
            alert(response.data);
        }
        //if edit
        if (endpoint === 'final' && invoice.id !== 'tempID') {
            //send to edit endpoint
            const response = await axios.post("http://localhost:3000/edit", {
                invoice: invoice,
            });
            alert(response.data);
        }
        //if delete
        if (endpoint === 'delete') {
            //send to delete endpoint
            const response = await axios.delete("http://localhost:3000/delete", {
                data: { invoice: invoice },
            });
            alert(response.data);
            //send user back to homescreen after delete
            // window.location.replace(`http://127.0.0.1:5173/`)
        }
        if (endpoint === 'paid') {
            //send to delete endpoint
            const response = await axios.post("http://localhost:3000/paid", {
                invoice: invoice,
            });
            alert(response.data);
            //send user back to homescreen after delete
            // window.location.replace(`http://127.0.0.1:5173/`)
        }

    } catch (error) {
        console.log(error);
    }
}

export { submitInvoice }
