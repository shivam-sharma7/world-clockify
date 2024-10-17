import express from 'express';
import dotenv from 'dotenv';
import { notFound } from './middleware/notFound.error';

import timezoneRoutes from './routes/timezone.routes';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', timezoneRoutes);

app.use(notFound);
app.listen(PORT, () => {
  console.log(`Application is running at http://localhost:${PORT}`);
});
