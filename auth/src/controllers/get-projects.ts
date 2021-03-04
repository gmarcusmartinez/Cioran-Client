import { asyncHandler, BadRequestError } from '@cioran/common/build';
import { Request, Response } from 'express';
import { User } from '../models/User';

export const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.currentUser?.id);
  if (!user) throw new BadRequestError('User not found.');
  res.status(200).send(user.projects);
});
