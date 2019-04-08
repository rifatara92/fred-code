function Pizza (crust, size, toppings, price) {
  this.crust = crust;
  this.price = price || 0;
  this.size = size;
  this.toppings = toppings || [];

  this.isValid = function () {
    if (this.crust &&
        this.size &&
        this.toppings &&
        this.toppings.length > 0) {
      return true;
    }

    return false;
  }
}

module.exports = Pizza;
