'use strict'
const alexaApp = require('alexa-app')
const app = new alexaApp.app('sample-alexa-skill')

app.intent('number', {
  'slots': { 'numberslot': 'AMAZON.NUMBER' },
  'utterances': ['say the number {-|numberslot}']
},
function (request, response) {
  var number = request.slot('numberslot')
  response.say('You asked for the number ' + number)
}
)
module.exports = app
