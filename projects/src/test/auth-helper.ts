import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const fakeAuthCookie = () => {
  // Build a JWT payload
  const payload = {
    _id: new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };
  // Create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  // Build session Object.
  const session = { jwt: token };
  // Turn session into JSON
  const sessionJSON = JSON.stringify(session);
  // Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");
  // Return cookie as string with encoded data

  return [`express:sess=${base64}`];
};
