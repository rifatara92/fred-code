// 3 -> 4 -> 2 -> 1
// index -> user -> store -> order -> pizza

let user = require('./user');

let crusts = [
  { text: 'Select Crust', value: 'none' },
  { text: 'Chicago Deep Dish', value: 'cdd' },
  { text: 'Neopolitan', value: 'neo' },
  { text: 'New York Style', value: 'nys' },
  { text: 'Sicilian', value: 'sic' },
  { text: 'Standard', value: 'sta' }
];

let locations = [
  { text: 'Select Location', value: 'none' },
  { text: 'East Arlington', value: 'ea' },
  { text: 'West Arlington', value: 'we' },
  { text: 'North Arlington', value: 'no' },
  { text: 'South Arlington', value: 'so' }
];

let sizes = [
  { text: 'Small', value: 'sm' },
  { text: 'Medium', value: 'md' },
  { text: 'Large', value: 'lg' },
  { text: 'Extra Large', value: 'xl' }
];

let meatToppings = [
  { text: 'Bacon', value: 'ba' },
  { text: 'Chicken', value: 'ch' },
  { text: 'Ham', value: 'ha' },
  { text: 'Pepperoni', value: 'pe' },
  { text: 'Turkey', value: 'tu' }
];

let vegetableToppings = [
  { text: 'Green Pepper', value: 'gp' },
  { text: 'Mushroom', value: 'mu' },
  { text: 'Onion', value: 'on' },
  { text: 'Pineapple', value: 'pi' },
  { text: 'Spinach', value: 'sp' }
];
