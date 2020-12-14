import mongoose from "mongoose";

const mongoose_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

export const connectDB = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined");
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI must be defined");

  try {
    await mongoose.connect(process.env.MONGO_URI, mongoose_options);
    console.log("DB Connected");
  } catch ({ message }) {
    console.log(message);
  }
};
