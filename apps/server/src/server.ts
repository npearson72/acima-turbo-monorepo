import express, { Express, Request, Response } from 'express';
import { helloWorld } from '@acima/util';

const app: Express = express();
const port = 4000;

app.get('/', (_req: Request, res: Response) => {
  res.send(helloWorld());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
