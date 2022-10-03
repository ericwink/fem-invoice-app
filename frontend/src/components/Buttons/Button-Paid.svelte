<script>
  import { submitInvoice } from "../../utilities/submitInvoice";
  export let invoice;
</script>

{#if invoice.status === "pending"}
  <button
    on:click={() => {
      submitInvoice(invoice, "paid");
    }}
    class="btn paid-btn">Mark as Paid</button
  >
{/if}

<style>
  button.paid-btn {
    background-color: var(--clr-full-purple);
    color: var(--clr-neutral-100);
  }

  @media (hover: hover) {
    button.paid-btn:hover {
      cursor: pointer;
      background-color: var(--clr-pale-purple);
    }
  }
</style>
