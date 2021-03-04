import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { NotFoundError, errorHandler } from '@cioran/common';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { myProjectsRouter } from './routes/get-projects';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

const opts = { signed: false, secure: process.env.NODE_ENV !== 'test' };
app.use(cookieSession(opts));

app.use(currentUserRouter);
app.use(myProjectsRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
