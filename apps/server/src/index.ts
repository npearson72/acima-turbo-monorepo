import express, { Express } from 'express';
import routes from './api/routes';

const app: Express = express();
const port = 4000;

const middleware = [
  express.json({
    type: ['application/json', 'application/vnd.api+json']
  })
];

app.use(middleware);

app.use('/api/v1/', routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
