/* eslint-disable no-console */
const socketIO = require('socket.io');

const init = (server) => {
  const io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('Client Connected');
    socket.on('disconnect', () => {
      console.log('Client Disconnected');
    });

    setInterval(() => {
      socket.emit('notification', {
        message: 'This is notification',
      });
    }, 5000);
  });
};

module.exports = {
  init,
};
