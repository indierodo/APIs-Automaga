const express = require('express');

const port = 3030;
const api = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./router/routes');

api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use('/', routes);

api.listen(port, function () {
  console.log("API server is running on "+ port +" port");
});