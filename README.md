## Twilio STUN/TURN

Express web server with API endpoint that returns STUN/TURN data from Twilio.

Twilio provides STUN/TURN servers (https://www.twilio.com/stun-turn) that can be used in your WebRTC applications.

## How to use

### Server

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy).

Or just clone this project and run

```
  npm install
```

and

```
  npm start
```


### Client

Call "/" and get array with STUN and TURN server that can be passed to WebRTC `RTCPeerConnection` as
`iceServers` option.