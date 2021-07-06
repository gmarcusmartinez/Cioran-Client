import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler, currentUser } from '@cioran/common';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

const opts = { signed: false, secure: process.env.NODE_ENV !== 'test' };
app.use(cookieSession(opts));
app.use(currentUser);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
