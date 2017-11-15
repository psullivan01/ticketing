const Sequelize = require('sequelize')

let express = require('express')
let bodyParser = require('body-parser')

let app = express()
let parser = bodyParser.json()

app.use(parser)
