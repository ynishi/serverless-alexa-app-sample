const express = require('express')
const app = require('./apps/sample-alexa-skill/app.js')

const PORT = process.env.port || 8080
const appE = express()

app.express({
  expressApp: appE,
  checkCert: false,
  debug: true
})

appE.set('view engine', 'ejs')

// show intent
appE.get('/intent', function (req, res) {
  res.send(app.schemas.intent())
})
// show utterances
appE.get('/utter', function (req, res) {
  res.send(app.utterances())
})

// start
appE.listen(PORT, function () {
  console.log('Listening on port ' + PORT + ', try http://localhost:' + PORT + '/test')
})
