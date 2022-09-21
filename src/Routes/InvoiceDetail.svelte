<script>
    import data from '../assets/data.json'

    export let params = {}
    const invoiceID = params.id
    
    const result = data.filter(invoice => invoice.id === invoiceID)
    
</script>

<p>Invoice Detail Page</p>
<p>Invoice ID {result[0].id}</p>
<p>{result[0].description}</p>
<p>{result[0].senderAddress.street}</p>
<p>{result[0].senderAddress.city}</p>
<p>{result[0].senderAddress.postCode}</p>
<p>{result[0].senderAddress.country}</p>
<h2>Invoice Date</h2>
<p>{result[0].createdAt}</p>
<h2>Payment Date</h2>
<p>{result[0].paymentDue}</p>
<h2>Bill To</h2>
<p>{result[0].clientName}</p>
<p>{result[0].clientAddress.street}</p>
<p>{result[0].clientAddress.city}</p>
<p>{result[0].clientAddress.postCode}</p>
<p>{result[0].clientAddress.country}</p>
<h2>Sent To</h2>
<p>{result[0].clientEmail}</p>

<h2>ITEMS</h2>
<ul>
    {#each result[0].items as item}
    <li>
        {item.name}
        {item.quantity} x £{item.price}
        £{item.total}
    </li>
    {/each}
</ul>

    <h2>GRAND TOTAL £{result[0].total}</h2>