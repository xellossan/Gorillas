// Optional Node.js Server with Express & PeerJS Server
const express = require('express');
const http = require('http');
const path = require('path');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname));

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});

app.use('/peerjs', peerServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log('=======================================================');
  console.log(` VR Gorillas 3D Server running on port ${PORT}`);
  console.log(` PC / Desktop:   http://localhost:${PORT}`);
  console.log(` Meta Quest VR:  https://<lan-ip>:${PORT}`);
  console.log(' Note: WebXR & Microphone require HTTPS or localhost.');
  console.log('=======================================================');
});
