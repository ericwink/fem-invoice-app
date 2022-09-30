<script>
  import { theme } from "../../store";
  export let openForm;

  export let style;
</script>

{#if style === "new"}
  <button on:click={openForm} class="new"><img src="/icon-plus.svg" alt="plus sign" /> New<span> Invoice</span></button>
{:else}
  <button on:click={openForm} class={`btn edit-btn ${$theme}`}>Edit</button>
{/if}

<style>
  .new {
    background-color: var(--clr-full-purple);
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.8em;
    border-radius: 25px;
    color: var(--clr-neutral-100);
    max-width: fit-content;
    min-width: 8em;
    border: none;
  }
  img {
    background-color: var(--clr-neutral-100);
    padding: 1em;
    border-radius: 50%;
  }

  span {
    display: none;
  }

  @media (hover: hover) {
    .new:hover {
      cursor: pointer;
      background-color: var(--clr-pale-purple);
    }
  }

  .edit-btn.dark {
    background-color: var(--clr-neutral-400);
    color: var(--clr-neutral-100);
  }
  .edit-btn.light {
    background-color: var(--clr-neutral-300);
    color: var(--clr-neutral-100);
  }
  @media (hover: hover) {
    .edit-btn.dark:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-100);
      color: var(--clr-neutral-300);
    }
    .edit-btn.light:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
  }

  @media (min-width: 600px) {
    span {
      display: block;
    }
  }
</style>
