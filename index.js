/* eslint-disable no-unused-vars */

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const myNotes = [
  {
    id: 1,
    comments: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.'
  },
  {
    id: 2,
    comments: 'Celery quandong swiss chard chicory earthnut pea potato.'
  },
  {
    id: 3,
    comments: 'Pea horseradish azuki bean lettuce avocado asparagus okra.'
  }
]

app.use(bodyParser.json())

app.get('/my-notes', (req, res) => {
  res.json(myNotes)
})

app.post('/my-notes', (req, res) => {
  myNotes.push(req.body)
  res.sendStatus(201)
})

app.put('/my-notes/:id', (req, res) => {

})

app.listen(3000, () => {
  console.log('Listening on 3000')
})
