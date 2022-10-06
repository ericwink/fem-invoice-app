<script>
  import { Invoice, SenderAddress, ClientAddress } from "../../classes/invoiceClass";
  import { theme } from "../../store";
  import { fly } from "svelte/transition";

  import ItemList from "./ItemList.svelte";
  import ButtonGoBack from "../Buttons/Button-GoBack.svelte";
  import ButtonDiscard from "../Buttons/Button-Discard.svelte";
  import ButtonDraft from "../Buttons/Button-Draft.svelte";
  import ButtonSaveSend from "../Buttons/Button-Save.svelte";

  export let invoice;
  export let openForm;

  //create new date and TODAY const to auto-fill blank invoice form with today's date
  const date = new Date();
  const today = date.toISOString().split("T")[0];

  // const tomorrow = new Date();
  // tomorrow.setDate(date.getDate() + terms);
  // console.log(tomorrow.toISOString().split("T")[0]);

  //declare new array to house items
  let itemList = [];

  //declare new empty elements
  let newInvoice;
  let newSenderAddress;
  let newClientAddress;

  //conditional to fill in invoices
  //we do not add itemArray here due to bindings. we pass newInvoice and itemList to the save&send button
  if (invoice) {
    newSenderAddress = new SenderAddress(invoice.senderAddress.street, invoice.senderAddress.city, invoice.senderAddress.postCode, invoice.senderAddress.country);
    newClientAddress = new ClientAddress(invoice.clientAddress.street, invoice.clientAddress.city, invoice.clientAddress.postCode, invoice.clientAddress.country);
    newInvoice = new Invoice(invoice.id, invoice.createdAt, invoice.paymentDue, invoice.description, invoice.paymentTerms, invoice.clientName, invoice.clientEmail, invoice.status, newSenderAddress, newClientAddress, invoice._id);
  } else {
    newSenderAddress = new SenderAddress("", "", "", "");
    newClientAddress = new ClientAddress("", "", "", "");
    newInvoice = new Invoice("tempID", today, "", "", 30, "", "", "draft", newSenderAddress, newClientAddress);
  }
</script>

<section id="invoice-form" transition:fly={{ duration: 600, x: -100 }} class={$theme}>
  <ButtonGoBack click={openForm} />

  {#if invoice}
    <h1 class={$theme}>Edit #{invoice.id}</h1>
  {:else}
    <h1 class={$theme}>New Invoice</h1>
  {/if}

  <h2>Bill From</h2>

  <form action="" class={$theme}>
    <div class="bf-street-address">
      <label for="bf-street-address">Street Address </label>
      <input type="text" name="bf-street-address" id="street-address" bind:value={newInvoice.senderAddress.street} />
    </div>

    <div class="bf-city">
      <label for="bf-city">City </label>
      <input type="text" name="bf-city" id="bf-city" bind:value={newInvoice.senderAddress.city} />
    </div>

    <div class="bf-post-code">
      <label for="bf-post-code">Post Code </label>
      <input type="text" name="bf-post-code" id="bf-post-code" bind:value={newInvoice.senderAddress.postCode} />
    </div>

    <div class="bf-country">
      <label for="bf-country">Country </label>
      <input type="text" name="bf-country" id="bf-country" bind:value={newInvoice.senderAddress.country} />
    </div>
  </form>

  <h2>Bill To</h2>

  <form action="" class={$theme}>
    <div class="bt-client-name">
      <label for="bt-client-name">Client's Name </label>
      <input type="text" name="bt-client-name" id="bt-client-name" bind:value={newInvoice.clientName} />
    </div>

    <div class="bt-client-email">
      <label for="bt-client-email">Client's Email </label>
      <input type="text" name="bt-client-email" id="bt-client-email" bind:value={newInvoice.clientEmail} />
    </div>

    <div class="bt-street-address">
      <label for="bt-street-address">Street Address </label>
      <input type="text" name="bt-street-address" id="street-address" bind:value={newInvoice.clientAddress.street} />
    </div>

    <div class="bt-city">
      <label for="bt-city">City </label>
      <input type="text" name="bt-city" id="bt-city" bind:value={newInvoice.clientAddress.city} />
    </div>

    <div class="bt-post-code">
      <label for="bt-post-code">Post Code </label>
      <input type="text" name="bt-post-code" id="bt-post-code" bind:value={newInvoice.clientAddress.postCode} />
    </div>

    <div class="bt-country">
      <label for="bt-country">Country </label>
      <input type="text" name="bt-country" id="bt-country" bind:value={newInvoice.clientAddress.country} />
    </div>
  </form>

  <form action="" class={`${$theme} alternate`}>
    <div class="invoice-date">
      <label for="invoice-date">Invoice Date </label>
      <input type="date" name="invoice-date" id="invoice-date" bind:value={newInvoice.createdAt} />
    </div>

    <div class="payment-terms">
      <label for="payment-terms">Payment Terms</label>
      <select name="payment-terms" id="payment-terms" bind:value={newInvoice.paymentTerms}>
        <option value={30}>Net 30 Days</option>
        <option value={45}>Net 45 Days</option>
        <option value={60}>Net 60 Days</option>
        <option value={90}>Net 90 Days</option>
      </select>
    </div>

    <div class="project-description">
      <label for="project-description">Project Description </label>
      <!-- <input type="text" value={invoice ? invoice.description : null} /> -->
      <input type="text" bind:value={newInvoice.description} />
    </div>
  </form>

  <ItemList {invoice} bind:itemList />

  <footer class={$theme}>
    <ButtonDiscard {invoice} {openForm} />
    {#if !invoice}<ButtonDraft {newInvoice} {itemList} {openForm} />{/if}
    <ButtonSaveSend {newInvoice} {itemList} {openForm} />
  </footer>
</section>

<style>
  /* dark & light theme colors */

  #invoice-form.dark {
    background-color: var(--clr-neutral-600);
  }
  #invoice-form.light {
    background-color: var(--clr-neutral-100);
  }

  .dark label {
    color: var(--clr-neutral-300);
  }
  .dark input,
  .dark select {
    background-color: var(--clr-neutral-400);
    color: var(--clr-neutral-100);
  }
  .light input,
  .light select {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-900);
    border: 1px solid var(--clr-pale-blue);
  }
  h1.dark {
    color: var(--clr-neutral-100);
  }

  /* mobile and basics */

  #invoice-form {
    position: relative;
    padding: 1em 1em;
    width: 100vw;
    overflow-y: auto;
    /* height is full height of viewport minus the navbar */
    height: calc(100vh - 72px);
    position: absolute;
    left: 0;
    top: 4.5em;
    z-index: 2;
  }

  div {
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: var(--clr-full-purple);
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1em;
    margin-bottom: 2em;
  }
  input,
  select {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5em;
    width: 100%;
  }
  select {
    padding: 0.8em 0.5em;
  }
  .bf-street-address {
    grid-column: 1/3;
  }

  .bf-country {
    grid-column: 1/3;
  }

  .bt-client-name,
  .bt-client-email,
  .bt-street-address,
  .bt-country,
  .invoice-date,
  .payment-terms,
  .project-description {
    grid-column: 1/3;
  }

  footer {
    margin-top: 4em;
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 1em;
    display: flex;
    justify-content: space-around;
  }
  footer.dark {
    background-color: var(--clr-neutral-400);
  }
  footer.light {
    box-shadow: 0px -16px 50px rgba(0, 0, 0, 0.102);
  }

  /* style date picker */

  /* tablet style @ 600px */
  @media (min-width: 600px) {
    #invoice-form {
      width: 80vw;
    }

    form {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .bf-street-address {
      grid-column: 1/4;
    }
    .bf-country {
      grid-column: 3/4;
    }
    .bt-client-name,
    .bt-client-email,
    .bt-street-address {
      grid-column: 1/4;
    }
    .bt-country {
      grid-column: 3/4;
    }
    .invoice-date {
      grid-column: 1/2;
    }
    .alternate {
      grid-template-columns: 1fr 1fr;
    }
    .invoice-date {
      grid-column: 1/2;
    }
    .payment-terms {
      grid-column: 2/3;
    }

    footer {
      gap: 1em;
    }
  }

  /* desktop */
  @media (min-width: 950px) {
    #invoice-form {
      padding: 1em 2em;
      width: 60vw;
      height: 100vh;
      left: 80px;
      top: 0;
      z-index: 100;
    }

    footer {
      padding: 1em 2em;
    }
  }
</style>
