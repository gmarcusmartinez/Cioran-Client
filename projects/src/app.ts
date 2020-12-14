import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";

import { createProjectRouter } from "./routes/create-project";
import { updateProjectRouter } from "./routes/update-project";
import { NotFoundError, errorHandler } from "@cioran/common";

const app = express();
app.set("trust proxy", true);
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(createProjectRouter);
app.use(updateProjectRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
