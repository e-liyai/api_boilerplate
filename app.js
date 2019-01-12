const express = require('express');
const volleyball = require('volleyball');
const path = require('path')
const userRouter = require('./userRouter')

const app = express();

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', userRouter)

const server = app.listen(4000, function() {
  console.log('Listening on port ', server.address().port)
})