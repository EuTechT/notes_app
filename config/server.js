const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const expressSession = require('express-session')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressSession({
	secret: 'A$SjksE3as4e80293%563e6(*9qs80GP6VSNas2%$1%$23',
	resave: false,
	saveUninitialized: false
}))

consign()
  .include('./app/routes')
  .then('./app/controllers')
  .then('./app/models')
  .then('./config/dbConnection.js')
  .into(app)

module.exports = app