const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const responseTime = require('response-time');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger.json');
const routes = require('./routes');
const notificationWebSocket = require('./lib/notificationWebSocket');
const notificationData = require('../data/index');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(responseTime());
app.use(helmet());
app.use('/crd', routes);
app.use('/docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Mock server listening on port ${port}!`));

// Setup websocket connection
const wsPromise = notificationWebSocket.init(server);

wsPromise.then((socket) => {
  notificationWebSocket.send(socket, notificationData);
});
