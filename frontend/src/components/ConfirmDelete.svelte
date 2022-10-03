<script>
  import { theme } from "../store";
  import { submitInvoice } from "../utilities/submitInvoice";
  export let invoice;
  export let toggleModal;

  function confirmDelete() {
    submitInvoice(invoice, "delete");
    toggleModal();
  }
</script>

<article class={$theme}>
  <h1>Confirm Deletion</h1>
  <p>Are you sure you want to delete invoice #{invoice.id}? This action cannot be undone</p>
  <div class="buttons">
    <button on:click={toggleModal} class={`btn cancel-btn ${$theme}`}>Cancel</button>
    <button on:click={confirmDelete} class={`btn delete-btn ${$theme}`}>Delete</button>
  </div>
</article>

<style>
  article {
    position: absolute;
    z-index: 900;
    left: 0;
    right: 0;
    top: 30%;
    margin: auto;
    padding: 3em 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 380px;
    border-radius: 10px;
  }
  article.dark {
    background-color: var(--clr-neutral-500);
    color: var(--clr-neutral-100);
  }
  article.light {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-400);
  }
  .buttons {
    align-self: flex-end;
  }

  button.delete-btn {
    background-color: var(--clr-full-red);
    color: var(--clr-neutral-100);
  }

  button.cancel-btn.dark {
    background-color: var(--clr-neutral-600);
    color: var(--clr-neutral-100);
  }
  button.cancel-btn.light {
    background-color: var(--clr-neutral-200);
    color: var(--clr-neutral-900);
  }
  @media (hover: hover) {
    button.cancel-btn.dark:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
    button.cancel-btn.light:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
  }

  @media (hover: hover) {
    button.delete-btn:hover {
      cursor: pointer;
      background-color: var(--clr-pale-red);
    }
  }
</style>
