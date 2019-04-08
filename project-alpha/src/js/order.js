let
  pizza = require('./pizza');

function Order (pizzas) {
  this.pizzas = pizzas || [];

  this.cost = function () {
    return this.pizzas.reduce(function (p1, p2) {
      return p1.price + p2.price;
    }, 0);
  };

  this.isValid = function () {
    if (this.pizzas && this.pizzas.length > 0) {
      return true;
    }

    return false;
  };

  this.makePizza = function (crust, size, toppings) {
    if (crust && size && toppings) {
      return new pizza.Pizza(crust, size, toppings);
    }

    return null;
  };

  this.takePizza = function (pizza) {
    if (pizza.isValid) {
      this.pizzas.push(pizza);
    }
  };
}

module.exports = Order;
