<script>
  import { theme } from "../../store.js";
  export let click;
</script>

<button on:click={click} class={$theme}>
  <img src="/icon-arrow-left.svg" alt="left arrow" />
  Go back
</button>

<style>
  button.dark {
    color: var(--clr-neutral-100);
  }
  button {
    background: none;
    border: none;
    display: flex;
    gap: 20px;
    padding: 0 0 2em;
  }

  @media (hover: hover) {
    button {
      cursor: pointer;
    }
  }
</style>
