let
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
    currentOrder = response.json(request.body);
    currentUser.placeOrder(currentOrder);
    currentLocation.takeOrder(currentOrder);
  });

server.route('/pizza')
  .get(function (request, response) {
    response.render('pizza.html', {});
  });

server.route('/user')
  .get(function (request, response) {
    response.render('user.html', {selection: {crusts: [], locations: [], sizes: [], toppings: []}});
  });

server.listen(serverPort, function () {
  console.log(`server is running and listening on port ${serverPort}`);
});
