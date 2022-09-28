<script>
  import data from "../assets/data.json";
  import ButtonInvoice from "../components/Invoice Form/Button-Invoice.svelte";
  import InvoicePreview from "../components/InvoicePreview.svelte";
  import { theme } from "../store";
  import InvoiceForm from "../components/Invoice Form/InvoiceForm.svelte";
  import Background from "../components/Invoice Form/Background.svelte";

  let invoiceCount = data.length;

  let visible = false;
  const openForm = () => {
    visible = !visible;
    if (document.body.style.overflowY != "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 600);
    }
  };
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
  <ButtonInvoice style={"new"} {openForm} />
</header>

<ul>
  {#each data as invoice}
    <InvoicePreview {invoice} />
  {/each}
</ul>

<!-- clicking above button runs function that reveals invoice -->
{#if visible}
  <InvoiceForm {openForm} />
  <Background />
{/if}

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
