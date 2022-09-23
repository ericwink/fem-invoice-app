<script>
  import { theme } from "../store";
</script>

<button class={`btn edit-btn ${$theme}`}>Edit</button>

<style>
  button.edit-btn.dark {
    background-color: var(--clr-neutral-400);
    color: var(--clr-neutral-100);
  }
  button.edit-btn.light {
    background-color: var(--clr-neutral-300);
    color: var(--clr-neutral-100);
  }
  @media (hover: hover) {
    button.edit-btn.dark:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-100);
      color: var(--clr-neutral-300);
    }
    button.edit-btn.light:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
  }
</style>
