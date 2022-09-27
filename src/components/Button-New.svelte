<a href="/#/newinvoice"><img src="/icon-plus.svg" alt="plus sign" /> New<span> Invoice</span></a>

<style>
  a {
    background-color: var(--clr-full-purple);
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.8em;
    border-radius: 25px;
    color: var(--clr-neutral-100);
    max-width: fit-content;
    min-width: 8em;
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
    a:hover {
      cursor: pointer;
      background-color: var(--clr-pale-purple);
    }
  }

  @media (min-width: 600px) {
    span {
      display: block;
    }
  }
</style>
