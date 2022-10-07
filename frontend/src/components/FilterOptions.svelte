<script>
  import { theme } from "../store";
  import { slide } from "svelte/transition";

  export let filterOptionsVisible;
  export let updateResults;
  export let paid;
  export let pending;
  export let draft;

  //when user clicks the filter by status button, toggle the status of filterOptions variable
  function toggleFilterOptions() {
    filterOptionsVisible = !filterOptionsVisible;
    setDirection();
  }

  //used for direction of arrow in 'filter by status' button.
  //sets default class to blank, then on click, adjust to up or down and animate
  let direction = "";
  function setDirection() {
    if (direction === "" || direction === "up") {
      direction = "down";
    } else {
      direction = "up";
    }
  }
</script>

<div class="filter">
  <button class={$theme} on:click={toggleFilterOptions}
    >Filter
    <pre> by status</pre>
    <img class={direction} src="/icon-arrow-down.svg" alt="down arrow" />
  </button>

  {#if filterOptionsVisible}
    <fieldset class={$theme} transition:slide={{ duration: 300 }}>
      <div>
        <input type="checkbox" name="draft" id="draft" bind:checked={draft} on:change={updateResults} />
        <label for="draft">Draft</label>
      </div>
      <div>
        <input type="checkbox" name="pending" id="pending" bind:checked={pending} on:change={updateResults} />
        <label for="pending">Pending</label>
      </div>
      <div>
        <input type="checkbox" name="paid" id="paid" bind:checked={paid} on:change={updateResults} />
        <label for="paid">Paid</label>
      </div>
    </fieldset>
  {/if}
</div>

<style>
  .filter {
    align-self: center;
    justify-self: center;
  }
  .filter button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding: 1em;
  }
  .filter button.dark {
    color: var(--clr-neutral-100);
  }
  .filter button.light {
    color: var(--clr-neutral-900);
  }
  @media (hover: hover) {
    .filter button {
      cursor: pointer;
    }
  }
  .filter pre {
    display: none;
  }
  .filter img {
    margin-left: 8px;
    transform: rotate(180deg);
  }
  .filter img.up {
    animation: rotateUp 0.3s both;
  }
  .filter img.down {
    animation: rotateDown 0.3s both;
  }

  @keyframes rotateUp {
    from {
      transform: rotateX(0);
    }
    to {
      transform: rotateX(180deg);
    }
  }
  @keyframes rotateDown {
    from {
      transform: rotateX(180deg);
    }
    to {
      transform: rotateX(0);
    }
  }

  fieldset {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em 3em 1em 1em;
    z-index: 2;
    top: 4em;
    border: none;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.324);
  }
  fieldset.light {
    background-color: var(--clr-neutral-100);
  }
  fieldset.dark {
    background-color: var(--clr-neutral-400);
  }

  /* tablet view */
  @media (min-width: 600px) {
    .filter pre {
      display: inline-block;
    }
  }
  /* desktop view */
  @media (min-width: 950px) {
    fieldset {
      top: 4em;
    }
  }
</style>
