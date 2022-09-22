<script>
    import data from '../assets/data.json'
    import {theme} from '../store.js'
    import Status from '../components/Status.svelte';
    import {pop} from 'svelte-spa-router'
    export let params = {}
    const invoiceID = params.id
    
    const result = data.filter(invoice => invoice.id === invoiceID)
    
</script>

<article id="invoice-detail">
    <header>
        <button on:click={()=>pop()} class={$theme}>
        <img src="/icon-arrow-left.svg" alt="left arrow">
        Go back
        </button>
    </header>
    <section class={`status background ${$theme}`}>
        <p>Status</p>
        <Status status={result[0].status}/>
    </section>
    <section class={`details background ${$theme}`}>
        <div class="invoice-header">
            <h3><span>#</span>{result[0].id}</h3>
            <p>{result[0].description}</p>
        </div>
        <div class="address">
            <p>{result[0].senderAddress.street}</p>
            <p>{result[0].senderAddress.city}</p>
            <p>{result[0].senderAddress.postCode}</p>
            <p>{result[0].senderAddress.country}</p>
        </div>
        <div class="invoice-date">
            <h2>Invoice Date</h2>
            <p>{result[0].createdAt}</p>
        </div>
        <div class="payment-date">
            <h2>Payment Date</h2>
            <p>{result[0].paymentDue}</p>
        </div>
        <div class="bill-to">
        <h2>Bill To</h2>
            <p>{result[0].clientName}</p>
            <p>{result[0].clientAddress.street}</p>
            <p>{result[0].clientAddress.city}</p>
            <p>{result[0].clientAddress.postCode}</p>
            <p>{result[0].clientAddress.country}</p>
        </div>
        <div class="sent-to">
            <h2>Sent To</h2>
            <p>{result[0].clientEmail}</p>
        </div>

        <section class={`invoice-items ${$theme}`}>
            <ul role="list">
                <li class="items-header">
                    <p>Item Name</p>
                    <p>Qty</p>
                    <p>Price</p>
                    <p>Total</p>
                </li>
                {#each result[0].items as item}
                <li>
                    <p class="item-name">{item.name}</p>
                    <p class="item-qty">{item.quantity}x</p>
                    <p class="item-price">£{item.price}</p>
                    <p class="item-total">£{item.total}</p>
                </li>
                {/each}
            </ul>
        </section>

        <section class={`total ${$theme}`}>
            <p>Amount Due</p>
            <h2>£{result[0].total}</h2>
        </section>
    </section>

    <footer class={`background ${$theme}`}>
        <button class={`btn edit-btn ${$theme}`}>Edit</button>
        <button class={`btn delete-btn ${$theme}`}>Delete</button>
        <button class={`btn paid-btn ${$theme}`}>Mark as Paid</button>
    </footer>
</article>