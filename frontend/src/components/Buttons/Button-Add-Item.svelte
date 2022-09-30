<script>
  export let addToItems;
  import { theme } from "../../store";
</script>

<button class={$theme} on:click={addToItems}>+ Add New Item</button>

<style>
  button {
    width: 100%;
    border: none;
    padding: 1.5em;
    border-radius: 25px;
    margin-top: 1em;
  }
  button.dark {
    background-color: var(--clr-neutral-400);
    color: var(--clr-neutral-300);
  }
  button.light {
    background-color: var(--clr-neutral-300);
    color: var(--clr-neutral-100);
  }
  @media (hover: hover) {
    button.dark:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
    button.light:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
  }
</style>
