const express = require('express')
const app = express();
const pool = require("./db");
const AccruePendapatan = require("./api/AccruePendapatan/routes");
const PendapatanRawatJalan = require("./api/PendapatanRawatJalan/routes");
const PiutangArBilled = require("./api/PiutangArBilled/routes");

app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, () => {
  console.log("server is listening o port 3000")
})