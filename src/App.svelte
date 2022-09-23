<script>
  import { theme } from "./store";
  import Router from "svelte-spa-router";
  import InvoiceDetail from "./Routes/InvoiceDetail.svelte";
  import Home from "./Routes/Home.svelte";
  import NavBar from "./components/NavBar.svelte";

  let routes = {
    "/": Home,
    "/Invoice/:id": InvoiceDetail,
  };
</script>

<div id="App" class={$theme}>
  <NavBar />
  <main class="container">
    <Router {routes} />
  </main>
</div>
