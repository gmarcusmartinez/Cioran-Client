import { Request, Response } from 'express';
import { Project } from '../models/Project';
import { natsWrapper } from '../nats-wrapper';
import { ProjectCreatedPublisher } from '../events/publishers/project-created-publisher';
import { RoleType } from '@cioran/common/build';

export const createProject = async (req: Request, res: Response) => {
  const { title, slug } = req.body;
  const projectOwner = req.currentUser!.id;

  const project = Project.build({ title, slug, projectOwner });
  project.assignRole(projectOwner, RoleType.Admin);

  await project.save();
  await new ProjectCreatedPublisher(natsWrapper.client).publish({
    id: project._id,
    title: project.title,
    slug: project.slug,
    projectOwner: project.projectOwner,
    team: project.team,
  });

  res.status(201).send(project);
};
