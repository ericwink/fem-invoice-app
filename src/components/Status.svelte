<script>
    import {theme} from '../store'
    export let status
</script>

<div id="status" class={`${status} ${$theme}`}>
<h4>{status}</h4>
</div>