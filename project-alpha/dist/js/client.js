let currentOrder = null;
let makePizza = document.querySelector('#makePizza');

function addToOrder (order) {
  fetch('/pizza', {
    body: JSON.stringify(order),
    headers: { 'content-type': 'application/json' },
    method: 'post',
  }).then(function (response) {
    console.log(response);
  });

  console.log('at the end');
}

if (makePizza) {
  makePizza.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    currentOrder = {
      crust: document.forms[0].crust.value,
      location: document.forms[0].location.value
    };

    addToOrder(currentOrder);
  });
};
