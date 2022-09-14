import '@configs/init';
import express, { Express } from 'express';
import routes from './api/v1';
import middleware, { globalErrorHandler } from './middleware';

const app: Express = express();
const port = process.env.SERVER_PORT;

app.use(middleware);

app.use('/api/v1/', routes);

app.use(globalErrorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
