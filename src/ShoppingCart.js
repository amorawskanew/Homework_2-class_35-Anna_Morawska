class cart {
  constructor(userName) {
    this.userName = userName;
    this.contents = [];
  }

  getItems() {
    return this.contents;
  }

  addItem(itemName, quantity, price) {
    const item = {};
    item.name = itemName;
    item.quantity = quantity;
    item.pricePerUnit = price;
    this.contents.push(item);
  }

  clear() {
    this.contents = [];
  }

  total() {
    return this.contents.reduce((acc, item) => {
      return acc + item.quantity * item.pricePerUnit;
    }, 0);
  }
}

module.exports = cart;
