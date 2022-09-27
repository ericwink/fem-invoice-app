<script>
  import ItemList from "./ItemList.svelte";
  import { theme } from "../../store";
</script>

<h1 class={$theme}>New Invoice</h1>

<h2>Bill From</h2>

<form action="" class={$theme}>
  <div class="bf-street-address">
    <label for="bf-street-address">Street Address </label>
    <input type="text" name="bf-street-address" id="street-address" />
  </div>

  <div class="bf-city">
    <label for="bf-city">City </label>
    <input type="text" name="bf-city" id="bf-city" />
  </div>

  <div class="bf-post-code">
    <label for="bf-post-code">Post Code </label>
    <input type="text" name="bf-post-code" id="bf-post-code" />
  </div>

  <div class="bf-country">
    <label for="bf-country">Country </label>
    <input type="text" name="bf-country" id="bf-country" />
  </div>
</form>

<h2>Bill To</h2>

<form action="" class={$theme}>
  <div class="bt-client-name">
    <label for="bt-client-name">Client's Name </label>
    <input type="text" name="bt-client-name" id="bt-client-name" />
  </div>

  <div class="bt-client-email">
    <label for="bt-client-email">Client's Email </label>
    <input type="text" name="bt-client-email" id="bt-client-email" />
  </div>

  <div class="bt-street-address">
    <label for="bt-street-address">Street Address </label>
    <input type="text" name="bt-street-address" id="street-address" />
  </div>

  <div class="bt-city">
    <label for="bt-city">City </label>
    <input type="text" name="bt-city" id="bt-city" />
  </div>

  <div class="bt-post-code">
    <label for="bt-post-code">Post Code </label>
    <input type="text" name="bt-post-code" id="bt-post-code" />
  </div>

  <div class="bt-country">
    <label for="bt-country">Country </label>
    <input type="text" name="bt-country" id="bt-country" />
  </div>
</form>

<form action="" class={`${$theme} alternate`}>
  <div class="invoice-date">
    <label for="invoice-date">Invoice Date </label>
    <input type="date" name="invoice-date" id="invoice-date" />
  </div>

  <div class="payment-terms">
    <label for="payment-terms">Payment Terms</label>
    <select name="payment-terms" id="payment-terms">
      <option value="Net 30 Days">Net 30 Days</option>
      <option value="Net 45 Days">Net 45 Days</option>
      <option value="Net 60 Days">Net 60 Days</option>
      <option value="Net 90 Days">Net 90 Days</option>
    </select>
  </div>

  <div class="project-description">
    <label for="project-description">Project Description </label>
    <input type="text" />
  </div>
</form>

<ItemList />

<style>
  /* dark & light theme colors */
  .invoice-form.dark {
    background-color: var(--clr-neutral-500);
  }
  .dark label {
    color: var(--clr-neutral-300);
  }
  .dark input,
  .dark select {
    background-color: var(--clr-neutral-400);
    color: var(--clr-neutral-100);
  }
  .light input,
  .light select {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-900);
    border: 1px solid var(--clr-neutral-300);
  }
  h1.dark {
    color: var(--clr-neutral-100);
  }

  /* mobile and basics */

  div {
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: var(--clr-full-purple);
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1em;
    margin-bottom: 2em;
  }
  input,
  select {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5em;
    width: 100%;
  }
  select {
    padding: 0.8em 0.5em;
  }
  .bf-street-address {
    grid-column: 1/3;
  }

  .bf-country {
    grid-column: 1/3;
  }

  .bt-client-name,
  .bt-client-email,
  .bt-street-address,
  .bt-country,
  .invoice-date,
  .payment-terms,
  .project-description {
    grid-column: 1/3;
  }

  /* tablet style @ 600px */
  @media (min-width: 600px) {
    form {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .bf-street-address {
      grid-column: 1/4;
    }
    .bf-country {
      grid-column: 3/4;
    }
    .bt-client-name,
    .bt-client-email,
    .bt-street-address {
      grid-column: 1/4;
    }
    .bt-country {
      grid-column: 3/4;
    }
    .invoice-date {
      grid-column: 1/2;
    }
    .alternate {
      grid-template-columns: 1fr 1fr;
    }
    .invoice-date {
      grid-column: 1/2;
    }
    .payment-terms {
      grid-column: 2/3;
    }
  }
</style>
