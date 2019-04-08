let
  express = require('express');
  nunjucks = require('nunjucks');

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
  .get(function (request, response) {
    reponse.render('order.html', {});
  });

server.route('/pizza')
  .get(function (request, response) {
    response.render('pizza.html', {});
  });

server.route('/user')
  .get(function (request, response) {
    response.render('user.html', {});
  });

server.listen(serverPort, function () {
  console.log(`server is running and listening on port ${serverPort}`);
});
