//loop through each item and append item.total = item.price * item.quantity
function updateTotals(itemList, newInvoice) {
    let invoiceTotal = 0;
    for (let item of itemList) {
        item.total = item.quantity * item.price;
        invoiceTotal = invoiceTotal + item.total;
    }
    newInvoice.total = invoiceTotal;
}

//add the itemList array to the invoice before sending to server
function addItemsToInvoice(itemList, newInvoice) {
    newInvoice.items = itemList;
}

//set due date based on selected invoice date and terms
function setDates(newInvoice) {
    //set the date to the appropriate format, otherwise dates are sometimes a day off
    const pickedDate = new Date(newInvoice.createdAt.replace(/-/g, "/"));
    const dueDate = new Date();
    dueDate.setDate(pickedDate.getDate() + newInvoice.paymentTerms);
    newInvoice.paymentDue = dueDate.toISOString().split("T")[0];
}

function updateInvoice(itemList, newInvoice) {
    updateTotals(itemList, newInvoice)
    addItemsToInvoice(itemList, newInvoice)
    setDates(newInvoice)
    return newInvoice
}

export { updateInvoice }