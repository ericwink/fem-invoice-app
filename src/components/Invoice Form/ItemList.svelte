<script>
  import AddItem from "./AddItem.svelte";
  import ButtonAdd from "../Buttons/Button-Add-Item.svelte";
  import { theme } from "../../store";

  export let invoice;

  let itemList = [];

  if (invoice) {
    itemList = invoice.items;
  }

  console.log(itemList);

  function addToItems() {
    itemList = [...itemList, new Item("New Item")];
    console.log(itemList);
  }

  function removeItems(remove) {
    itemList.splice(remove, 1);
    itemList = [...itemList];
  }

  class Item {
    constructor(name) {
      this.name = name;
      this.price = 0;
      this.quantity = 0;
    }
    get total() {
      return this.quantity * this.price;
    }
  }
</script>

<h2 class={$theme}>Item List</h2>
{#each itemList as item, index}
  <AddItem {item} {index} {removeItems} />
{/each}

<ButtonAdd {addToItems} />

<style>
  h2.dark {
    color: var(--clr-neutral-300);
  }
</style>
