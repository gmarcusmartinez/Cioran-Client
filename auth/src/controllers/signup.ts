import { Request, Response } from "express";
import { BadRequestError, asyncHandler } from "@cioran/common";
import { User } from "../models/User";
import { UserCreatedPublisher } from "../events/publishers/user-created-publisher";
import { natsWrapper } from "../nats-wrapper";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new BadRequestError("Email in use.");

  if (!email || !password)
    throw new BadRequestError("Please provide all required fields.");

  const user = User.build({ name, email, password });
  await user.save();

  await new UserCreatedPublisher(natsWrapper.client).publish({
    id: user.id,
    name: user.name,
    avatar: user.avatar,
  });

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(201).send(user);
});
