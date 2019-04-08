let
  order = require('./order');

function Location (name, address, orders) {
  this.address = address;
  this.name = name;
  this.orders = orders || [];

  this.isValid = function () {
    if (address && name && orders && orders.length >= 0) {
      return true;
    }

    return false;
  }

  this.makeOrder = function (user) {
    if (user.isValid()) {
      return new order.Order();
    }

    return null;
  }

  this.takeOrder = function (order) {
    if (order.isValid()) {
      this.orders.push(order);
    }
  }
}

module.exports = Location;
