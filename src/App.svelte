<script>
  import {theme} from './store'
  import Router from 'svelte-spa-router'
  import InvoiceDetail from './Routes/InvoiceDetail.svelte';
  import Home from './Routes/Home.svelte';

  let routes = {
    "/": Home,
    "/Invoice/:id": InvoiceDetail
  }
  // toggle dark/light theme for application
  const toggleTheme = () =>{
    theme.update(current => current === 'light' ? current = 'dark' : current = 'light')
    }
</script>

<div id="App" class={$theme}>
  <button on:click={toggleTheme}>Change Theme</button>
  <main class="container">
    <Router {routes} />
  </main>
</div>