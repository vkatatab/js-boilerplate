import express from 'express';
import type { Request, Response } from 'express';

import { mongoDbClient } from '@boilerplate/connector';

const port = process.env.SERVER_PORT;
const uri = process.env.MONGO_URI;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  const mongoConnection = mongoDbClient(uri!);
  console.log(`Server is running on port ${port}`)
});
