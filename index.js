/* eslint-disable no-unused-vars */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const note = []

app.use(bodyParser.json())



app.listen(3000, ()=> {
  console.log('Listening on 3000')
})
