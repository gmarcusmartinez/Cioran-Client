import { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError } from '@cioran/common/build';
import { Project } from '../models/Project';

export const getProject = async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) throw new NotFoundError();

  if (!project.team.some((member) => member._id === req.currentUser!.id))
    throw new NotAuthorizedError();

  res.status(200).send(project);
};
