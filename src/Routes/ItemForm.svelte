<script>
  import AddItem from "../components/AddItem.svelte";

  let itemList = [];

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
      this.qty = 0;
    }
    get total() {
      return this.qty * this.price;
    }
  }
</script>

<h2>Item List</h2>
{#each itemList as item, index}
  <AddItem {item} {index} {removeItems} />
{/each}

<button on:click={addToItems}>+ Add New Item</button>
