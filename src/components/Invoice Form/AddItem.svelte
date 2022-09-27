<script>
  export let item;
  export let index;
  export let removeItems;
  import { theme } from "../../store";
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
    padding: 0.8em 10px;
  }
  .price input {
    padding: 0.8em 10px;
  }
  .total input {
    background: none;
    border: none;
    max-width: 70px;
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
    .qty {
      justify-self: center;
    }
    button {
      justify-self: flex-end;
    }
  }
</style>
