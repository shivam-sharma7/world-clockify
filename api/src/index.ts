import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import timezoneRoutes from './routes/timezone.routes';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Timezone API');
});

app.use('/api/v1', timezoneRoutes);

app.listen(PORT, () => {
  console.log(`Application is running at http://localhost:${PORT}`);
});
