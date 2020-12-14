import { app } from "./app";
import { connectDB } from "./config/connect-db";

connectDB();
app.listen(3000, () => console.log("App listening:3000"));
