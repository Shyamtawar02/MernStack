import express from 'express';
import cors from 'cors';
import routes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/users', routes);

export default app;