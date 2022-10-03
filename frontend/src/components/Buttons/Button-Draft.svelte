<script>
  import { theme } from "../../store";
  import { submitInvoice } from "../../utilities/submitInvoice";

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
    submitInvoice(newInvoice, "draft");
    openForm();
  }
</script>

<button on:click={updateAndSend} class={`btn draft-btn ${$theme}`}>Save as Draft</button>

<style>
  button.draft-btn.dark {
    background-color: var(--clr-neutral-300);
    color: var(--clr-neutral-100);
  }
  button.draft-btn.light {
    background-color: var(--clr-neutral-300);
    color: var(--clr-neutral-100);
  }
  @media (hover: hover) {
    button.draft-btn.dark:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-100);
      color: var(--clr-neutral-300);
    }
    button.draft-btn.light:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
  }
</style>
