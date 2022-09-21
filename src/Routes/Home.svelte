<script>
import data from '../assets/data.json'
import InvoicePreview from '../components/InvoicePreview.svelte'
</script>



<ul>
    {#each data as invoice}
    <InvoicePreview {invoice}/>
    {/each}
  </ul>