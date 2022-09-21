<script>
    import src from '/icon-arrow-right.svg'
    import {theme} from '../store'
    import Status from './Status.svelte';
    export let invoice

</script>

<article id="invoice-preview" class={$theme}>
    <h3><span>#</span>{invoice.id}</h3>
    <span>Due {invoice.paymentDue}</span>
    <p>{invoice.clientName}</p>
    <h2>£{invoice.total}</h2>
    <Status status={invoice.status} />
<img {src} alt="right-arrow" />
</article>