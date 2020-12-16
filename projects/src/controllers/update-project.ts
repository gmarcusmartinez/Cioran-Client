import { Request, Response } from "express";
import {
  asyncHandler,
  NotAuthorizedError,
  NotFoundError,
} from "@cioran/common";
import { Project } from "../models/Project";
import { natsWrapper } from "../nats-wrapper";
import { ProjectUpdatedPublisher } from "../events/publishers/project-updated-publisher";

export const updateProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findById(req.params.id);
    if (!project) throw new NotFoundError();
    if (project.projectOwner !== req.currentUser!.id)
      throw new NotAuthorizedError();

    const { title, slug } = req.body;
    project.set({ title, slug });
    await project.save();

    await new ProjectUpdatedPublisher(natsWrapper.client).publish({
      id: project.id,
      title: project.title,
      slug: project.slug,
      projectOwner: project.projectOwner,
    });

    res.status(201).send(project);
  }
);
