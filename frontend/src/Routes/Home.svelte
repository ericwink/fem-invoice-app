<script>
  import data from "../assets/data.json";
  import ButtonInvoice from "../components/Invoice Form/Button-Invoice.svelte";
  import InvoicePreview from "../components/InvoicePreview.svelte";
  import { theme } from "../store";
  import InvoiceForm from "../components/Invoice Form/InvoiceForm.svelte";
  import Background from "../components/Invoice Form/Background.svelte";
  import NoResults from "../components/NoResults.svelte";
  import FilterOptions from "../components/FilterOptions.svelte";

  let invoiceCount = data.length;

  //variable to determine display visibility of filter options box
  let filterOptionsVisible = false;

  //when user clicks the filter by status button, toggle the status of filterOptions variable
  function toggleFilterOptions() {
    filterOptionsVisible = !filterOptionsVisible;
    setDirection();
  }

  //used for direction of arrow in 'filter by status' button.
  //sets default class to blank, then on click, adjust to up or down and animate
  let direction = "";
  function setDirection() {
    if (direction === "" || direction === "up") {
      direction = "down";
    } else {
      direction = "up";
    }
  }

  //empty array and options for filtering displayed invoices
  let results = [];
  let paid = true;
  let pending = true;
  let draft = true;

  //function to filter through each invoice, if selection matching status is true, return the invoice to filtered array
  function filterChoices(invoice) {
    if (invoice.status === "paid" && paid === true) {
      return invoice;
    }
    if (invoice.status === "pending" && pending === true) {
      return invoice;
    }
    if (invoice.status === "draft" && draft === true) {
      return invoice;
    }
  }

  //filter array of data using the filterChoices function
  function updateResults() {
    results = data.filter(filterChoices);
  }
  //call once at the time of load to populate the list
  updateResults();

  //visible variable and function to control when invoice form appears
  let visible = false;
  const openForm = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    //close filterOptions if open
    filterOptionsVisible = false;
    //set visible to opposite of current state
    visible = !visible;
    //disable y scrolling on the body - enable it if we previously disabled
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

  <FilterOptions {updateResults} {toggleFilterOptions} {filterOptionsVisible} bind:paid bind:pending bind:draft {direction} />
  <ButtonInvoice style={"new"} {openForm} />
</header>

<ul>
  {#each results as invoice}
    <InvoicePreview {invoice} />
  {/each}
</ul>

{#if results.length === 0}
  <NoResults />
{/if}

<!-- clicking above button runs function that reveals invoice -->
{#if visible}
  <InvoiceForm {openForm} invoice={null} />
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
</style>
