<script>
    import src from '/icon-arrow-right.svg'
    import {theme} from '../store'
    import Status from './Status.svelte';
    export let invoice
</script>


<a href={`#/invoice/${invoice.id}`} id="invoice-preview" class={$theme}>
    <h3><span>#</span>{invoice.id}</h3>
    <span>Due {invoice.paymentDue}</span>
    <p>{invoice.clientName}</p>
    <h2>£{invoice.total.toFixed(2)}</h2>
    <div id="status"><Status status={invoice.status} /></div>
<img {src} alt="right-arrow" />
</a>