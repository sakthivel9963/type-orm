import express, { Application } from 'express';
import router from './router';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { notFound, errorHandler } from './middleware/defaults';
import 'dotenv/config';
import { stream } from './middleware/winston';

const app: Application = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream }));

app.use('/api/v1', router);

app.use(notFound);
app.use(errorHandler);

export default app;
