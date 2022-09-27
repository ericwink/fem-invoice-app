<script>
  import { theme } from "./store";
  import Router from "svelte-spa-router";
  import InvoiceDetail from "./Routes/InvoiceDetail.svelte";
  import Home from "./Routes/Home.svelte";
  import NavBar from "./components/NavBar.svelte";
  import InvoiceForm from "./components/Invoice Form/InvoiceForm.svelte";

  let routes = {
    "/": Home,
    "/invoice/:id": InvoiceDetail,
    "/newinvoice": InvoiceForm,
  };
</script>

<div id="App" class={$theme}>
  <NavBar />
  <main class="container">
    <Router {routes} />
  </main>
</div>
