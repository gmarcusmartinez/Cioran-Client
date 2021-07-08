import { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError } from '@cioran/common';
import { Project } from '../models/Project';
import { Sprint } from '../models/Sprint';

export const createSprint = async (req: Request, res: Response) => {
  const project = await Project.findById(req.body.projectId);
  if (!project) throw new NotFoundError();

  const isProjectAdmin = project.team.find(
    ({ _id, role }) => _id === req.currentUser!.id && role === 'admin'
  );
  if (!isProjectAdmin) throw new NotAuthorizedError();

  const sprint = Sprint.build({
    createdBy: req.currentUser!.id,
    title: req.body.title,
    subtitle: req.body.subtitle,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    project,
  });

  await sprint.save();

  res.status(201).send(sprint);
};
