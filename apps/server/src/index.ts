import express, { Express } from 'express';
import { todosRouter, usersRouter } from './api';

const app: Express = express();
const port = 4000;

const middleware = [
  express.json({
    type: ['application/json', 'application/vnd.api+json']
  })
];

app.use(middleware);

app.use('/api/v1/todos', todosRouter);
app.use('/api/v1/users', usersRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
