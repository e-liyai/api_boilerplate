const express = require('express');
const volleyball = require('volleyball');
const users = require('./users')

const app = express();

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/users', function(req, res, next) {
  res.send(users)
})

app.get('/user/:id', function (req, res, next) {
  const id = req.params.id
  const reqQuery = req.query
  const user = users[id]
  const response = {}
  Object.keys(reqQuery).forEach(function(key) {
     response[key] = user[key]
  })
  res.send(response)
})

app.post('/users', function (req, res, next) {
  const user = req.body
  users.push(user)
  res.send(user)
})

app.put('/users/:id', function(req, res, next) {
  const user = users[req.params.id]
  Object.assign(user, req.body)
  res.send(user)
})

const server = app.listen(4000, function() {
  console.log('Listening on port ', server.address().port)
})