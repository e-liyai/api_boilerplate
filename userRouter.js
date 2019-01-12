const router = require('express').Router()
const users = require('./users')

router.get('/', function(req, res, next) {
  res.send(users)
})

router.get('/:id', function (req, res, next) {
  const id = req.params.id
  const reqQuery = req.query
  const user = users[id]
  const response = {}

  const isEmptyQuery = Object.keys(reqQuery).length

  if(!isEmptyQuery) res.send(user)
  else {
    Object.keys(reqQuery).forEach(function(key) {
       response[key] = user[key]
    })
    res.send(response)
  }
})

router.post('/', function (req, res, next) {
  const user = req.body
  users.push(user)
  res.send(user)
})

router.put('/:id', function(req, res, next) {
  const user = users[req.params.id]
  Object.assign(user, req.body)
  res.send(user)
})

module.exports = router