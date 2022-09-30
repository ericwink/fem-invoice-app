<script>
  export let item;
  export let index;
  export let removeItems;
  import { theme } from "../../store";

  $: innerWidth = 0;
</script>

<!-- svelte binding to ensure live update of window.innerWidth -->
<!-- utilized to determine when to display item headings -->
<svelte:window bind:innerWidth />

<form class={$theme} on:submit={e => e.preventDefault()}>
  <div class="name">
    {#if (index === 0 && innerWidth > 600) || innerWidth <= 600}<label for="name">Item name</label>{/if}
    <input type="text" name="name" bind:value={item.name} />
  </div>

  <div class="quantity">
    {#if (index === 0 && innerWidth > 600) || innerWidth <= 600}<label for="quantity">quantity</label>{/if}
    <input type="text" name="quantity" bind:value={item.quantity} />
  </div>

  <div class="price">
    {#if (index === 0 && innerWidth > 600) || innerWidth <= 600}<label for="price">Price </label>{/if}
    <input type="text" name="price" bind:value={item.price} />
  </div>
  <div class="total">
    {#if (index === 0 && innerWidth > 600) || innerWidth <= 600}<label for="total">Total </label>{/if}
    <input type="text" name="total" bind:value={item.total} disabled />
  </div>

  <button on:click={() => removeItems(index)}>
    <img src="/icon-delete.svg" alt="delete" />
  </button>
</form>

<style>
  /* mobile and basics */
  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 0.8em;
    margin-bottom: 2em;
  }
  input {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5em;
    max-height: 45px;
    width: 100%;
  }
  .dark label {
    color: var(--clr-neutral-300);
  }
  .dark input {
    background-color: var(--clr-neutral-400);
    color: var(--clr-neutral-100);
  }
  .light input {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-900);
    border: 1px solid var(--clr-neutral-300);
  }

  button {
    background: none;
    border: none;
    width: fit-content;
    height: fit-content;
    justify-self: flex-end;
    margin-top: 2em;
  }
  @media (hover: hover) {
    button:hover {
      cursor: pointer;
      filter: invert(49%) sepia(35%) saturate(5178%) hue-rotate(332deg) brightness(106%) contrast(85%);
    }
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .name {
    grid-column: 1/5;
  }
  .quantity input {
    padding: 0.8em 10px;
  }
  .price input {
    padding: 0.8em 10px;
  }
  .total input {
    background: none;
    border: none;
    max-width: 90px;
    padding: 0.8em 10px;
  }

  /* tablet style 600px */
  @media (min-width: 600px) {
    form {
      grid-template-columns: 2fr 0.5fr 1fr 1fr 0.5fr;
      gap: 10px;
    }
    .name {
      grid-column: 1/2;
    }
    .quantity {
      justify-self: center;
    }
    button {
      justify-self: flex-end;
      margin-bottom: 1.2em;
    }
  }
</style>
