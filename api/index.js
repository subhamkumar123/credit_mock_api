const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger.json');
const routes = require('./routes');

const app = express();
const port = 4000;

// app.use(bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/dms', routes);
app.use('/docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
