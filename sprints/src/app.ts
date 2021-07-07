import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { NotFoundError, errorHandler, currentUser } from '@cioran/common';
import { createSprintRouter } from './routes/create-sprint';
import { deleteSprintRouter } from './routes/delete-sprint';
import { getSprintRouter } from './routes/get-sprint';
import { getSprintsRouter } from './routes/get-sprints';
import { updateSprintRouter } from './routes/update-sprint';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);
app.use(createSprintRouter);
app.use(deleteSprintRouter);
app.use(getSprintRouter);
app.use(getSprintsRouter);
app.use(updateSprintRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
