import { Address } from "./address.js";
import { Order } from "./order.js";

let storeCollection = {
  east: new Store('EastArlington'),
  west: new Store('WestArlington'),
  north: new Store('NorthArlington'),
  south: new Store('SouthArlington')
};

function Store (n) {
  this.id = null;
  this.name = n;
  this.address = new Address();
  this.orders = [];
}

export { Store, storeCollection };
