const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const misrutas = require("./router/routes");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", misrutas);
const port = 9001;

app.listen(port, (err, res) => {
  if (err) {
    console.log("Error al levantar servidor");
    return;
  }
  console.log("API se ejecuta en el puerto " + port);
});