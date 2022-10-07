<script>
  import { theme } from "./store";
  import Router from "svelte-spa-router";
  import InvoiceDetail from "./Routes/InvoiceDetail.svelte";
  import Home from "./Routes/Home.svelte";
  import NavBar from "./components/NavBar.svelte";

  let routes = {
    "/": Home,
    "/invoice/:id": InvoiceDetail,
  };
</script>

<NavBar />
<div id="App" class={$theme}>
  <main class="container">
    <Router {routes} />
  </main>
</div>

<style>
</style>
