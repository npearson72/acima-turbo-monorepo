import '@configs/init';
import express, { Express } from 'express';
import router from './api/v1';
import middleware, { globalErrorHandler } from './middleware';

const app: Express = express();
const serverUrl = process.env.SERVER_URL;
const serverPort = process.env.SERVER_PORT;

app.use(middleware);

app.use('/api/v1/', router);

app.use(globalErrorHandler);

app.listen(serverPort, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running: ${serverUrl}`);
});
