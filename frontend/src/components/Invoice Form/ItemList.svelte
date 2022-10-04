<script>
  import AddItem from "./AddItem.svelte";
  import ButtonAdd from "../Buttons/Button-Add-Item.svelte";
  import { theme } from "../../store";
  import { Item } from "../../classes/invoiceClass";

  export let invoice;
  export let itemList;

  // if an invoice is passed in, create an array out of the invoice items
  if (invoice) {
    //go through each item on the invoice
    //make a new Item out of each
    //assign that array to itemList
    for (let item of invoice.items) {
      itemList.push(new Item(item.name, item.price, item.quantity));
    }
  }

  //each click to the add new item button spreads the previous itemList array, and adds a new Item Class item
  function addToItems() {
    itemList = [...itemList, new Item("New Item", 0, 0)];
  }

  //remove the item based on the index provided, spread itemList array again to re-render
  function removeItems(remove) {
    itemList.splice(remove, 1);
    itemList = [...itemList];
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
