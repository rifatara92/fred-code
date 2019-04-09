let currentOrder = null;
let makePizza = document.querySelector('#makePizza');

function addToOrder (order) {
  
}

if (makePizza) {
  document.addEventListener('click', function () {
    currentOrder = {
      crust: document.forms[0].crust.value,
      location: document.forms[0].location.value,
      size: document.forms[0].size.value,
      toppings: document.forms[0].toppings,
    };

    addToOrder(currentOrder);
  });
};
