<script>
  import axios from "axios";
  export let invoice;

  async function markPaid() {
    try {
      const response = await axios.post("http://localhost:3000/markpaid", {
        invoice: invoice,
      });
      alert(response.data);
    } catch (error) {
      console.log("error");
    }
  }
</script>

<button on:click={markPaid} class="btn paid-btn">Mark as Paid</button>

<style>
  button.paid-btn {
    background-color: var(--clr-full-purple);
    color: var(--clr-neutral-100);
  }

  @media (hover: hover) {
    button.paid-btn:hover {
      cursor: pointer;
      background-color: var(--clr-pale-purple);
    }
  }
</style>
