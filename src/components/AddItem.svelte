<script>
  //make invoice object. Form will create the new invoice object with all properties?

  //item group in invoice form should be it's own object

  const item = {
    name: "banner design",
    qty: 1,
    price: 156,
  };
</script>

<form action="">
  <label for="item-name"
    >Item name
    <input type="text" name="item-name" />
  </label>
  <label for="qty"
    >Qty
    <input type="text" name="qty" />
  </label>
  <label for="price"
    >Price
    <input type="text" name="price" />
  </label>
</form>
