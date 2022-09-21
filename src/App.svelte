<script>
  import data from './assets/data.json'
  import {theme} from './store'
  import InvoicePreview from './components/InvoicePreview.svelte'
  
const toggleTheme = () =>{
  theme.update(current => current === 'light' ? current = 'dark' : current = 'light')
  }

</script>

<main>
  <h1>Test</h1>
  <h2>{$theme}</h2>

<ul>
  {#each data as invoice}
  <InvoicePreview {invoice}/>
  {/each}
</ul>

  <button on:click={toggleTheme}>Change Theme</button>
  </main>