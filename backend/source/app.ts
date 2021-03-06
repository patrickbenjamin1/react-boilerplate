import * as config from './config';

import express from 'express';
import bodyParser from 'body-parser';

import middlewares from './middlewares';
import controllers from './controllers';
import errorHandler from './errorHandler';

const app = express();

app.use(bodyParser.json());

app.use(middlewares);
app.use(controllers);

app.use(errorHandler);

app.listen(config.port, () =>
console.log(`Server is listening on port ${config.port}.`)
)