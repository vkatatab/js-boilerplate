import express from 'express';
import type { Request, Response } from 'express';

const port = process.env.SERVER_PORT;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
