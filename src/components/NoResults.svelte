<script>
  import { theme } from "../store";
</script>

<section class={`no-results ${$theme}`}>
  <img src="/illustration-empty.svg" alt="no results to display" />
  <h2>There is nothing here</h2>
  <p>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
</section>

<style>
  .no-results {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    margin: auto;
    margin-top: 5em;
    text-align: center;
    gap: 2em;
  }
  .no-results img {
    min-height: 250px;
  }
  .no-results h2 {
    font-size: var(--fs-500);
  }
  .no-results span {
    font-weight: var(--fw-bold);
  }
  .no-results.dark {
    color: var(--clr-neutral-100);
  }

  .no-results.light {
    color: var(--clr-neutral-900);
  }
</style>
