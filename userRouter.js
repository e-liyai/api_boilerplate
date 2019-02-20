const router = require('express').Router()
const users = require('./users')
const userModel = require('./db').users

router.get('/', async (req, res, next) => {
  const users = await userModel.findAll()
  res.send(users)
})

router.get('/:id', async function (req, res, next) {

  try{
    const user = await userModel.findOne({
      where: {
        id: req.params.id
      }
    })
    if (!user) res.send('not found!')
    else {
      console.log(user.bio())
      res.send(user)
    }
  } catch (ex) {

  }

  // const {id} = req.params
  // const reqQuery = req.query
  // const user = users[id]
  // const response = {}
  //
  // const isEmptyQuery = Object.keys(reqQuery).length
  //
  // if(!isEmptyQuery) res.send(user)
  // else {
  //   Object.keys(reqQuery).forEach(function(key) {
  //      response[key] = user[key]
  //   })
  //   res.send(response)
  // }
})

router.post('/',  async function (req, res, next) {
  const createdUser = await userModel.create(req.body)
  res.send(createdUser)
})

router.put('/:id', function(req, res, next) {
  const user = users[req.params.id]
  Object.assign(user, req.body)
  res.send(user)
})

module.exports = router