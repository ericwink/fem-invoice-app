<script>
  import { theme } from "../../store";
  export let newInvoice;
</script>

<button
  on:click={() => {
    console.log(newInvoice);
  }}
  class={`btn savesend-btn ${$theme}`}>Save & Send</button
>

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
