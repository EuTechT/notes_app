const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

consign()
  .include('./app/routes')
  .then('./app/controllers')
  .then('./app/models')
  .into(app)

module.exports = app