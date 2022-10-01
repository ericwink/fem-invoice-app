<script>
  import axios from "axios";

  import { theme } from "../../store";
  export let newInvoice;
  export let itemList;

  async function sendInvoice() {
    //append new invoice with the itemList array
    newInvoice.items = itemList;
    console.log(itemList);
    //adjust status of invoice to 'pending' since this is the submission
    //probably can't keep this logic here due to editing a previous invoice.... keeping for now.
    newInvoice.status = "pending";
    try {
      await axios.post("http://localhost:3000/newinvoice", {
        invoice: newInvoice,
      });
      console.log("invoice sent successfully!");
    } catch (error) {
      console.log("error");
    }
  }
</script>

<button on:click={sendInvoice} class={`btn savesend-btn ${$theme}`}>Save & Send</button>

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
