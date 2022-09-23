<script>
    import {pop} from 'svelte-spa-router'
    import data from '../assets/data.json'
    import {theme} from '../store.js'
    import Status from '../components/Status.svelte';
    import ButtonEdit from '../components/Button-Edit.svelte';
    import ButtonDelete from '../components/Button-Delete.svelte';
    import ButtonPaid from '../components/Button-Paid.svelte';
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
        <div class="action-buttons">
            <ButtonEdit />
            <ButtonDelete />
            <ButtonPaid />
        </div>
    </section>
    <section class={`details background ${$theme}`}>
        <div class="invoice-header">
            <h3>#{result[0].id}</h3>
            <p>{result[0].description}</p>
        </div>
        <div class="address">
            <p>{result[0].senderAddress.street}</p>
            <p>{result[0].senderAddress.city}</p>
            <p>{result[0].senderAddress.postCode}</p>
            <p>{result[0].senderAddress.country}</p>
        </div>
        <div class="invoice-date">
            <p>Invoice Date</p>
            <h2>{result[0].createdAt}</h2>
        </div>
        <div class="payment-date">
            <p>Payment Date</p>
            <h2>{result[0].paymentDue}</h2>
        </div>
        <div class="bill-to">
            <p>Bill To</p>
            <h2>{result[0].clientName}</h2>
            <p>{result[0].clientAddress.street}</p>
            <p>{result[0].clientAddress.city}</p>
            <p>{result[0].clientAddress.postCode}</p>
            <p>{result[0].clientAddress.country}</p>
        </div>
        <div class="sent-to">
            <p>Sent To</p>
            <h2>{result[0].clientEmail}</h2>
        </div>

        <section class={`invoice-items ${$theme}`}>
            <ul role="list">
                <li class="items-header">
                    <p class="header-item-name">Item Name</p>
                    <p class="header-item-qty">Qty</p>
                    <p class="header-item-price">Price</p>
                    <p class="header-item-total">Total</p>
                </li>
                {#each result[0].items as item}
                <li>
                    <p class="item-name">{item.name}</p>
                    <p class="item-qty">{item.quantity}<span>x</span></p>
                    <p class="item-price">£{item.price.toFixed(2)}</p>
                    <p class="item-total">£{item.total.toFixed(2)}</p>
                </li>
                {/each}
            </ul>
        </section>

        <section class={`total ${$theme}`}>
            <p>Amount Due</p>
            <h2 class="total-amount">£{result[0].total.toFixed(2)}</h2>
        </section>
    </section>

    <footer class={`background ${$theme}`}>
        <ButtonEdit />
        <ButtonDelete />
        <ButtonPaid />
    </footer>

</article>
