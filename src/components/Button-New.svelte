<script>
  import { fly } from "svelte/transition";

  import InvoiceForm from "./Invoice Form/InvoiceForm.svelte";

  let visible = false;
  const openForm = () => {
    visible = !visible;
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflowY = "";
      }, 600);
    }
  };
</script>

<button on:click={openForm}><img src="/icon-plus.svg" alt="plus sign" /> New<span> Invoice</span></button>

{#if visible}
  <div id="invoice-form" transition:fly={{ duration: 600, x: -100 }}>
    <InvoiceForm {openForm} />
  </div>
  <div class="background" />
{/if}

<style>
  #invoice-form {
    position: absolute;
    left: 0;
    top: 4.5em;
    z-index: 1;
  }

  button {
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
    button:hover {
      cursor: pointer;
      background-color: var(--clr-pale-purple);
    }
  }

  @media (min-width: 600px) {
    span {
      display: block;
    }
    .background {
      width: 100vw;
      height: 100vh;
      background-color: black;
      opacity: 50%;
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
    }
  }

  @media (min-width: 900px) {
    #invoice-form {
      position: absolute;
      left: 100px;
      top: 0;
      z-index: 1;
    }
  }
</style>
