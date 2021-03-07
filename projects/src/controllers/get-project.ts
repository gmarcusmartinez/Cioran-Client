import { Request, Response } from 'express';
import { BadRequestError, NotFoundError } from '@cioran/common/build';
import { Project } from '../models/Project';

export const getProject = async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) throw new NotFoundError();

  const userId = req.currentUser!.id;
  if (!project.team.some((teamMember) => teamMember._id === userId))
    throw new BadRequestError('You are not authorized to view this project');

  res.status(200).send(project);
};
