<script>
  import InvoiceForm from "./InvoiceForm.svelte";
  import { theme } from "../../store";

  export let style;

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

{#if style === "new"}
  <button on:click={openForm} class="new"><img src="/icon-plus.svg" alt="plus sign" /> New<span> Invoice</span></button>
{:else}
  <button on:click={openForm} class={`btn edit-btn ${$theme}`}>Edit</button>
{/if}

<!-- clicking above button runs function that reveals invoice -->
{#if visible}
  <InvoiceForm {openForm} />
  <div class="background" />
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
    .background {
      width: 100vw;
      /* height is full height of viewport minus the navbar */
      height: calc(100vh - 72px);
      background-color: black;
      opacity: 50%;
      position: absolute;
      z-index: 0;
      top: 72px;
      left: 0;
    }
  }

  @media (min-width: 950px) {
    .background {
      top: 0;
      height: 100%;
    }
  }
</style>
