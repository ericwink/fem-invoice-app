<script>
  export let toggleModal;
</script>

<button on:click={toggleModal} class="btn delete-btn">Delete</button>

<style>
  button.delete-btn {
    background-color: var(--clr-full-red);
    color: var(--clr-neutral-100);
  }

  @media (hover: hover) {
    button.delete-btn:hover {
      cursor: pointer;
      background-color: var(--clr-pale-red);
    }
  }
</style>
