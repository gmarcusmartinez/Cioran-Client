import request from "supertest";
import { app } from "../app";

export const getAuthCookie = async () => {
  const name = "Test User";
  const email = "test@test.com";
  const password = "password";

  const response = await request(app)
    .post("/api/auth/signup")
    .send({ name, email, password })
    .expect(201);
  const cookie = response.get("Set-Cookie");
  return cookie;
};
