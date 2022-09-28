<script>
  import { pop } from "svelte-spa-router";
  import data from "../assets/data.json";
  import { theme } from "../store.js";
  import Status from "../components/Status.svelte";
  import ButtonInvoice from "../components/Invoice Form/Button-Invoice.svelte";
  import ButtonDelete from "../components/Button-Delete.svelte";
  import ButtonPaid from "../components/Button-Paid.svelte";
  import ButtonGoBack from "../components/Button-GoBack.svelte";
  export let params = {};
  const invoiceID = params.id;

  const result = data.filter(invoice => invoice.id === invoiceID);
</script>

<article id="invoice-detail">
  <header>
    <ButtonGoBack
      click={() => {
        pop();
      }}
    />
  </header>
  <section class={`status background ${$theme}`}>
    <p>Status</p>
    <Status status={result[0].status} />
    <div class="action-buttons">
      <ButtonInvoice style={"edit"} />
      <ButtonDelete />
      <ButtonPaid />
    </div>
  </section>
  <section class={`details background ${$theme}`}>
    <div class="invoice-header">
      <h3>#{result[0].id}</h3>
      <p>{result[0].description}</p>
    </div>
    <div class="address">
      <p>{result[0].senderAddress.street}</p>
      <p>{result[0].senderAddress.city}</p>
      <p>{result[0].senderAddress.postCode}</p>
      <p>{result[0].senderAddress.country}</p>
    </div>
    <div class="invoice-date">
      <p>Invoice Date</p>
      <h2>{result[0].createdAt}</h2>
    </div>
    <div class="payment-date">
      <p>Payment Date</p>
      <h2>{result[0].paymentDue}</h2>
    </div>
    <div class="bill-to">
      <p>Bill To</p>
      <h2>{result[0].clientName}</h2>
      <p>{result[0].clientAddress.street}</p>
      <p>{result[0].clientAddress.city}</p>
      <p>{result[0].clientAddress.postCode}</p>
      <p>{result[0].clientAddress.country}</p>
    </div>
    <div class="sent-to">
      <p>Sent To</p>
      <h2>{result[0].clientEmail}</h2>
    </div>

    <section class={`invoice-items ${$theme}`}>
      <ul role="list">
        <li class="items-header">
          <p class="header-item-name">Item Name</p>
          <p class="header-item-qty">Qty</p>
          <p class="header-item-price">Price</p>
          <p class="header-item-total">Total</p>
        </li>
        {#each result[0].items as item}
          <li>
            <p class="item-name">{item.name}</p>
            <p class="item-qty">{item.quantity}<span>x</span></p>
            <p class="item-price">£{item.price.toFixed(2)}</p>
            <p class="item-total">£{item.total.toFixed(2)}</p>
          </li>
        {/each}
      </ul>
    </section>

    <section class={`total ${$theme}`}>
      <p>Amount Due</p>
      <h2 class="total-amount">£{result[0].total.toFixed(2)}</h2>
    </section>
  </section>

  <footer class={`background ${$theme}`}>
    <ButtonInvoice style={"edit"} />
    <ButtonDelete />
    <ButtonPaid />
  </footer>
</article>

<style>
  /* light and dark themes */
  #invoice-detail .background.dark {
    background-color: var(--clr-neutral-500);
    color: var(--clr-neutral-200);
  }
  #invoice-detail .background.light {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-700);
  }

  /* Styles */

  #invoice-detail .status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
    border-radius: 10px;
    margin-bottom: 1em;
  }

  #invoice-detail .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5em;
    border-radius: 10px;
    margin-bottom: 2em;
  }

  #invoice-detail .invoice-header {
    grid-column: 1/3;
    margin-bottom: 2em;
  }

  #invoice-detail .address {
    grid-column: 1/3;
    margin-bottom: 2em;
  }

  #invoice-detail .invoice-date {
    grid-column: 1/2;
    margin-bottom: 2em;
  }

  #invoice-detail .invoice-date p {
    margin-bottom: 1em;
  }

  #invoice-detail .payment-date {
    grid-column: 1/2;
    margin-bottom: 2em;
  }

  #invoice-detail .payment-date p {
    margin-bottom: 1em;
  }

  #invoice-detail .bill-to {
    grid-column: 2/3;
    grid-row: 3/5;
  }
  #invoice-detail .bill-to :nth-child(1) {
    margin-bottom: 1em;
  }
  #invoice-detail .bill-to :nth-child(2) {
    margin-bottom: 1em;
  }

  #invoice-detail .sent-to {
    margin-bottom: 2em;
  }
  #invoice-detail .sent-to p {
    margin-bottom: 1em;
  }

  #invoice-detail .invoice-items {
    grid-column: 1/3;
    grid-row: 6/7;
    padding: 2em 2em 1em 2em;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  #invoice-detail .items-header {
    display: none;
  }

  #invoice-detail li {
    display: grid;
    grid-template-columns: 0.5fr 2fr 2fr;
    margin-bottom: 1em;
  }

  #invoice-detail .item-name {
    grid-column: 1/3;
  }

  #invoice-detail .item-qty {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  #invoice-detail .item-price {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  #invoice-detail .item-total {
    grid-column: 3/4;
    grid-row: 1/3;
    align-self: center;
    justify-self: right;
  }

  #invoice-detail .invoice-items.dark {
    background-color: var(--clr-neutral-400);
  }
  #invoice-detail .invoice-items.light {
    background-color: var(--clr-neutral-200);
  }

  #invoice-detail .total {
    grid-row: 7/8;
    grid-column: 1/3;
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  #invoice-detail .total.dark {
    background-color: var(--clr-neutral-700);
  }
  #invoice-detail .total.light {
    background-color: var(--clr-neutral-400);
    color: var(--clr-neutral-100);
  }

  #invoice-detail .total-amount {
    font-size: var(--fs-500);
  }

  #invoice-detail .action-buttons {
    display: none;
  }

  #invoice-detail footer {
    position: relative;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }

  /* --- tablet style --- */
  @media (min-width: 600px) {
    #invoice-detail .status {
      display: grid;
      grid-template-columns: 0.3fr 1fr 2fr;
    }
    #invoice-detail .action-buttons {
      display: block;
      grid-column: 3/4;
      justify-self: right;
    }

    #invoice-detail .details {
      grid-template-columns: 1fr 1fr 1fr;
    }

    #invoice-detail .invoice-header {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    #invoice-detail .invoice-header h3 {
      font-size: var(--fs-300);
    }

    #invoice-detail .address {
      grid-column: 3/4;
      grid-row: 1/2;
      justify-self: right;
      text-align: right;
    }

    #invoice-detail .bill-to {
      grid-column: 2/3;
      grid-row: 2/4;
    }

    #invoice-detail .sent-to {
      grid-column: 3/4;
      grid-row: 2/3;
    }

    #invoice-detail .invoice-items {
      grid-column: 1/4;
    }
    #invoice-detail .total {
      grid-column: 1/4;
    }
    #invoice-detail .items-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
    #invoice-detail .header-item-qty {
      justify-self: center;
    }
    #invoice-detail .header-item-price {
      justify-self: right;
    }
    #invoice-detail .header-item-total {
      justify-self: right;
    }

    #invoice-detail li {
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
    #invoice-detail .item-name {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    #invoice-detail .item-qty {
      grid-column: 2/3;
      grid-row: 1/2;
      justify-self: center;
    }
    #invoice-detail .item-qty span {
      display: none;
    }
    #invoice-detail .item-price {
      grid-column: 3/4;
      grid-row: 1/2;
      justify-self: right;
    }
    #invoice-detail .item-total {
      grid-column: 4/5;
      grid-row: 1/2;
    }
    #invoice-detail footer {
      display: none;
    }
  }
</style>
