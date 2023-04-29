'use strict';
var express = require('express');
var cors = require('express-cors')
var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


var app = express();


app.use(cors());


var cachedToken = null;

function getNewToken () {
  twilio.tokens.create({}, function(err, token) {
    if (!err && token) {
      cachedToken = token;
    }
  });
}

// fetch token initially
getNewToken();
// refetch new token every 15 mins and save to cache
setInterval(getNewToken, 1000*60*10);

app.get('/', function (req, res) {
  if (!cachedToken) {
    res.send(400, 'Problem getting ice servers data from Twilio')
  } else {
    res.json(cachedToken.iceServers);
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function (err) {
  if (err) {
    console.log('failed to start server', err);
  } else {
    console.log('started server on port:', port);
  }
});
