import { Request, Response } from "express";
import { BadRequestError, asyncHandler } from "@cioran/common";
import { User } from "../models/User";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new BadRequestError("Email in use.");

  if (!email || !password)
    throw new BadRequestError("Please provide all required fields.");

  const user = User.build({ name, email, password });
  await user.save();

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(201).send(user);
});
