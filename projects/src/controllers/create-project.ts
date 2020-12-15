import { Request, Response } from "express";
import { Project } from "../models/Project";
import { RoleType, User } from "../models/User";

import { natsWrapper } from "../nats-wrapper";
import { ProjectCreatedPublisher } from "../events/publishers/project-created-publisher";

export const createProject = async (req: Request, res: Response) => {
  const { title, slug } = req.body;
  const projectOwner = req.currentUser!.id;
  const project = Project.build({ title, slug, projectOwner });

  const user = await User.findById(projectOwner);
  project.assignRole(user!, RoleType.Admin);

  await project.save();
  await new ProjectCreatedPublisher(natsWrapper.client).publish({
    id: project.id,
    title: project.title,
    slug: project.slug,
    projectOwner: project.projectOwner,
  });

  res.status(201).send(project);
};
