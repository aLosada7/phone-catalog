import express from 'express';
import cors from 'cors';

import { addPhoneRoutes } from './app/phones';

const app = express();

//make use of cors
app.use(cors());

// parse application/json
app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

addPhoneRoutes(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
