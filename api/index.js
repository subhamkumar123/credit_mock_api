var express = require('express');
var cors = require('cors');
// var bodyParser = require('body-parser');

var app = express();
const port = 4000

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger.json');

const routes = require('./routes')

// app.use(bodyParser)
app.use(express.json())
app.use(cors())
app.use('/dms', routes);
app.use('/docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))