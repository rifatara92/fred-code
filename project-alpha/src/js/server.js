let
  bodyParser = require('body-parser'),
  express = require('express'),
  location = require('./location'),
  nunjucks = require('nunjucks'),
  user = require('./user');

let currentLocation = null;
let currentOrder = null;
let currentUser = null;
let server = express();
const serverPort = 8000;

nunjucks.configure('src/html', {
  autoescape: true,
  express: server
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('dist'));

server.route('/')
  .get(function (request, response) {
    response.render('index.html', {});
  });

server.route('/location')
  .get(function (request, response) {
    response.render('location.html', {});
  });

server.route('/order')
  .post(function (request, response) {
    currentUser.placeOrder(currentOrder);
    currentLocation.takeOrder(currentOrder);
  });

server.route('/pizza')
  .post(function (request, response) {
    console.log(request.body);
    // currentPizza = response.json(request.body);
    // currentOrder.push(currentPizza);
    // currentUser.makeOrder(currentOrder);
    // currentLocation.makeOrder(currentOrder);
    response.send('all done');
  });

server.route('/user')
  .get(function (request, response) {
    response.render('user.html', { 
      selection: {
        crusts: [], 
        locations: [
          { text: 'EastCampus', value: 'east' },
          { text: 'WestCampus', value: 'west' }
        ], 
        sizes: [], 
        toppings: []
      }
    });
  });

server.listen(serverPort, function () {
  console.log(`server is running and listening on port ${serverPort}`);
});
