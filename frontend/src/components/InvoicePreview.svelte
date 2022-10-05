<script>
  import src from "/icon-arrow-right.svg";
  import { theme } from "../store";
  import Status from "./Status.svelte";
  export let invoice;
</script>

<a href={`#/invoice/${invoice._id}`} id="invoice-preview" class={$theme}>
  <h3><span>#</span>{invoice.id}</h3>
  <span>Due {invoice.paymentDue}</span>
  <p>{invoice.clientName}</p>
  <h2>${invoice.total.toFixed(2)}</h2>
  <div class="status-flag"><Status status={invoice.status} /></div>
  <img {src} alt="right-arrow" />
</a>

<style>
  /* light and dark themes */
  #invoice-preview.dark {
    background-color: var(--clr-neutral-500);
    color: var(--clr-neutral-100);
  }
  #invoice-preview.dark span {
    color: var(--clr-neutral-200);
  }
  #invoice-preview.light {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-700);
  }
  #invoice-preview.light span,
  #invoice-preview.light p {
    color: var(--clr-neutral-300);
  }

  /* styles */
  #invoice-preview {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1em 1.5em;
    border-radius: 5px;
    border: 1px solid transparent;
    margin-bottom: 10px;
  }

  #invoice-preview h3 {
    margin-bottom: 20px;
  }

  #invoice-preview span {
    grid-column: 1/2;
  }

  #invoice-preview p {
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: right;
  }

  #invoice-preview h2 {
    grid-column: 1/2;
  }

  #invoice-preview .status-flag {
    grid-column: 2/3;
    grid-row: 2/4;
    justify-self: right;
  }

  #invoice-preview img {
    display: none;
  }

  @media (hover: hover) {
    #invoice-preview:hover {
      border: 1px solid var(--clr-full-purple);
    }
  }

  /* --- tablet style --- */
  @media (min-width: 600px) {
    #invoice-preview {
      grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 0.5fr;
      column-gap: 8px;
      align-items: center;
    }

    #invoice-preview h3 {
      margin: 0;
      grid-column: 1/2;
      grid-row: 1/2;
    }

    #invoice-preview span {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    #invoice-preview p {
      grid-column: 3/4;
      grid-row: 1/2;
    }

    #invoice-preview h2 {
      grid-column: 4/5;
      grid-row: 1/2;
      justify-self: right;
    }

    #invoice-preview .status-flag {
      grid-column: 5/6;
      grid-row: 1/2;
      justify-self: right;
    }

    #invoice-preview img {
      display: block;
      max-width: 4px;
      max-height: 8px;
      grid-column: 6/7;
      justify-self: center;
    }
  }
</style>
