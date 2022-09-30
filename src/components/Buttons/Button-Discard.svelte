<script>
  import { theme } from "../../store";
  export let invoice;
  export let openForm;
</script>

<button on:click={openForm} class={`btn discard-btn ${$theme}`}>
  {#if invoice}
    Cancel
  {:else}Discard
  {/if}
</button>

<style>
  button.discard-btn.dark {
    background-color: var(--clr-neutral-500);
    color: var(--clr-neutral-100);
  }
  button.discard-btn.light {
    background-color: var(--clr-neutral-200);
    color: var(--clr-neutral-900);
  }
  @media (hover: hover) {
    button.discard-btn.dark:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
    button.discard-btn.light:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
  }
</style>
