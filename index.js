'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({ message: 'Hola mundo!' })
})

app.get('/p/:tagId', (req, res) => {
  res.send({ message: `Hola ${req.params.tagId}` })
})

app.get('/faq', (req, res) => {
  res.send({ message: 'FAQ message' })
})

app.listen(port, () => {
  console.log(`Hello Benjamin Peña Olvera! en el localhost ${port}`)
})
