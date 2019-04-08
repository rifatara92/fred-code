let
  order = require('./order');

function User (name, address, orders) {
  this.address = address;
  this.name = name;
  this.orders = orders || [];

  this.isValid = function () {
    if (address && name && orders && orders.length >= 0) {
      return true;
    }

    return false;
  }

  this.makeOrder = function (location) {
    if (location.isValid()) {
      return new order.Order();
    }

    return null;
  }

  this.placeOrder = function (order) {
    if (order.isValid()) {
      this.orders.push(order);
    }
  }
}

module.exports = User;
