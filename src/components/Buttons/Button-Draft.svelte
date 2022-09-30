<script>
  import { theme } from "../../store";
</script>

<button class={`btn draft-btn ${$theme}`}>Save as Draft</button>

<style>
  button.draft-btn.dark {
    background-color: var(--clr-neutral-300);
    color: var(--clr-neutral-100);
  }
  button.draft-btn.light {
    background-color: var(--clr-neutral-300);
    color: var(--clr-neutral-100);
  }
  @media (hover: hover) {
    button.draft-btn.dark:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-100);
      color: var(--clr-neutral-300);
    }
    button.draft-btn.light:hover {
      cursor: pointer;
      background-color: var(--clr-neutral-200);
      color: var(--clr-neutral-300);
    }
  }
</style>
