<script>
  import { theme } from "../store";
  export let status;
</script>

<div id="status" class={`${status} ${$theme}`}>
  <h4>{status}</h4>
</div>

<style>
  #status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    text-transform: capitalize;
  }
  #status::before {
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  #status.pending {
    color: var(--clr-pending-text);
    background-color: var(--clr-pending-bg);
  }
  #status.pending::before {
    background-color: var(--clr-pending-text);
  }

  #status.paid {
    color: var(--clr-paid-text);
    background-color: var(--clr-paid-bg);
  }
  #status.paid::before {
    background-color: var(--clr-paid-text);
  }

  #status.draft {
    color: var(--clr-draft-text);
    background-color: var(--clr-draft-bg);
  }
  #status.draft::before {
    background-color: var(--clr-draft-text);
  }

  #status.draft.light {
    color: var(--clr-neutral-700);
    background-color: var(--clr-neutral-200);
  }
  #status.draft.light::before {
    background-color: var(--clr-neutral-700);
  }
</style>
