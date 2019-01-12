const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

app.use(volleyball)
app.use(bodyParser)

const server = app.listen(4000, function() {
  console.log('Listening on port ', server.address().port)
})