/* eslint-disable no-unused-vars */

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const myNotes = []

app.use(bodyParser.json())

app.get('/my-notes', (req, res) => {
  res.json(myNotes)
})

app.post('/my-notes', (req, res) => {
  myNotes.push(req.body)
  res.sendStatus(201)
  res.send('Successfully added note!')
})

app.listen(3000, () => {
  console.log('Listening on 3000')
})
