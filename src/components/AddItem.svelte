<script>
  export let item;
  export let index;
  export let removeItems;
  import { theme } from "../store";
</script>

<form class={$theme} on:submit={e => e.preventDefault()}>
  <div class="name">
    <label for="name">Item name</label>
    <input type="text" name="name" bind:value={item.name} />
  </div>

  <div class="qty">
    <label for="qty">Qty</label>
    <input type="text" name="qty" bind:value={item.qty} />
  </div>

  <div class="price">
    <label for="price">Price </label>
    <input type="text" name="price" bind:value={item.price} />
  </div>
  <div class="total">
    <label for="total">Total </label>
    <input type="text" name="total" bind:value={item.total} disabled />
  </div>

  <button on:click={() => removeItems(index)}>
    <img src="/icon-delete.svg" alt="delete" />
  </button>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 1em;
  }
  input {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5em;
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
    justify-self: center;
    margin-top: 2em;
  }
  @media (hover: hover) {
    button {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .name {
    grid-column: 1/5;
  }
  .qty input {
    max-width: 50px;
    padding: 0.8em 10px;
  }
  .price input {
    max-width: 100px;
    padding: 0.8em 10px;
  }
  .total input {
    background: none;
    border: none;
    max-width: 70px;
    padding: 0.8em 0;
  }

  /* tablet style 600px */
  @media (min-width: 600px) {
    form {
      grid-template-columns: repeat(5, 1fr);
    }
    .name {
      grid-column: 1/2;
    }
    .qty {
      justify-self: center;
    }
    button {
      justify-self: flex-start;
    }
  }
</style>
