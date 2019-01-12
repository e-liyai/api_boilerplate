const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball())

const server = app.listen(4000, function() {
  console.log('Listening on port ', server.address().port)
})