import { app } from "./app";
import { connectDB } from "./config/connect-db";
import { connectNats } from "./config/connect-nats";

const start = () => {
  connectNats();
  connectDB();
  app.listen(3000, () => console.log("App listening:3000"));
};

start();
