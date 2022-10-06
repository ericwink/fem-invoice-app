<script>
  import { submitInvoice } from "../../utilities/submitInvoice";
  import { getInvoices } from "../../utilities/getInvoices";
  import { updateInvoice } from "../../utilities/updateInvoice";

  import { theme } from "../../store";
  export let newInvoice;
  export let itemList;
  export let openForm;

  async function updateAndSend() {
    newInvoice = updateInvoice(itemList, newInvoice);
    console.log(newInvoice);
    await submitInvoice(newInvoice, "final");
    getInvoices();
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
