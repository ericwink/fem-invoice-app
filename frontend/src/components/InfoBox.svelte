<script>
  import { theme, globalMessage } from "../store";
  import Background from "./Invoice Form/Background.svelte";
  export let findInvoice;

  function clearMessage() {
    if ($globalMessage.includes("deleted")) {
      window.location.replace("http://127.0.0.1:5173/");
      globalMessage.update(current => (current = null));
      return;
    }
    globalMessage.update(current => (current = null));
    findInvoice();
  }
</script>

{#if $globalMessage}
  <article class={$theme}>
    <h1>Attention:</h1>
    <p>{$globalMessage}</p>
    <div class="buttons">
      <button on:click={clearMessage} class={`btn cancel-btn ${$theme}`}>OK</button>
    </div>
  </article>
  <Background />
{/if}

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
</style>
