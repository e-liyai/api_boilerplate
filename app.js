const express = require('express');
const volleyball = require('volleyball');
// const bodyParser = require('body-parser');

const app = express();

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', function(req, res, next) {
  res.send('hi!')
})

const server = app.listen(4000, function() {
  console.log('Listening on port ', server.address().port)
})