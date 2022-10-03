<script>
  // import axios from "axios";
  import { submitInvoice } from "../../utilities/submitInvoice";

  import { theme } from "../../store";
  export let newInvoice;
  export let itemList;
  export let openForm;

  //loop through each item and append item.total = item.price * item.quantity
  function updateTotals() {
    let invoiceTotal = 0;
    for (let item of itemList) {
      item.total = item.quantity * item.price;
      invoiceTotal = invoiceTotal + item.total;
    }
    newInvoice.total = invoiceTotal;
  }

  //add the itemList array to the invoice before sending to server
  function addItemsToInvoice() {
    newInvoice.items = itemList;
  }

  function updateAndSend() {
    updateTotals();
    addItemsToInvoice();
    submitInvoice(newInvoice, "final");
    openForm();
  }
</script>

<button on:click={updateAndSend} class={`btn savesend-btn ${$theme}`}>Save & Send</button>

<style>
  button.savesend-btn.dark {
    background-color: var(--clr-full-purple);
    color: var(--clr-neutral-100);
  }
  button.savesend-btn.light {
    background-color: var(--clr-pale-purple);
    color: var(--clr-neutral-100);
  }

  @media (hover: hover) {
    button.savesend-btn.dark:hover {
      cursor: pointer;
      background-color: var(--clr-pale-purple);
    }
    button.savesend-btn.light:hover {
      cursor: pointer;
      background-color: var(--clr-full-purple);
    }
  }
</style>
