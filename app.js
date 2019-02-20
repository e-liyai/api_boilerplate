const express = require('express');
const volleyball = require('volleyball');
const path = require('path')
const userRouter = require('./userRouter')
const db = require('./db').db

const app = express();

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', userRouter)

const server = app.listen(4000, async () => {
  console.log('Listening on port ', server.address().port)
  await db.sync({ force: false })
  console.log('DB is synced')
})