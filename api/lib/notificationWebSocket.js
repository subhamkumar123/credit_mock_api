/* eslint-disable no-console */
const socketIO = require('socket.io');

const key = {
  url: 'http://localhost:8080/api/notification/openconnection',
  contentType: 'application/json',
  logLevel: 'debug',
  trackMessageLength: true,
  reconnectInterval: 5000,
  shared: false,
  dropHeaders: false,
  attachHeadersAsQueryString: true,
  headers: {
    ORG: 'org', ACC: 'acc', USR: 'usr', SR: 'sr', CHNL: 'chnl', 'X-OneTimeToken': 'token',
  },
};

const init = (server) => {
  const io = socketIO(server);
  return new Promise((resolve) => {
    io.on('connection', (socket) => {
      console.log('Client Connected');
      socket.on('disconnect', () => {
        console.log('Client Disconnected');
      });
      resolve(socket);
    });
  });
};

const send = (socket, payload) => {
  socket.emit(key, payload);
  console.log('Sent data: ', payload);
};

module.exports = {
  init,
  send,
};
