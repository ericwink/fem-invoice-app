<script>
import data from '../assets/data.json'
import InvoicePreview from '../components/InvoicePreview.svelte'
let invoiceCount = data.length;
</script>

<header id="home">
  <h1>Invoices</h1>
  <p>{invoiceCount} invoices</p>
  <h3>Filter</h3>
  <img src="/icon-arrow-down.svg" alt="down arrow">
  <button class="new-invoice"><img src="/icon-plus.svg" alt="plus sign"> New</button>
</header>

<ul>
    {#each data as invoice}
    <InvoicePreview {invoice}/>
    {/each}
  </ul>