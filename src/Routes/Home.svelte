<script>
  import data from "../assets/data.json";
  import ButtonNew from "../components/Button-New.svelte";
  import InvoicePreview from "../components/InvoicePreview.svelte";
  import { theme } from "../store";
  let invoiceCount = data.length;
</script>

<header id="home" class={$theme}>
  <div class="invoice-count">
    <h1>Invoices</h1>
    <p>{invoiceCount} invoices</p>
  </div>
  <div class="change-later">
    <h3>Filter</h3>
    <img src="/icon-arrow-down.svg" alt="down arrow" />
  </div>
  <ButtonNew />
</header>

<ul>
  {#each data as invoice}
    <InvoicePreview {invoice} />
  {/each}
</ul>

<style>
  header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    margin-bottom: 2em;
  }
  header.dark {
    color: var(--clr-neutral-100);
  }
  .invoice-count {
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: center;
  }
  .change-later {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
