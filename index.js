'use strict';

const express = require('express');
var os = require("os");
var hostname = os.hostname();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  //res.send(`Hello World1`);
  res.send(`PDD Demo from [ ${hostname} ]`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
