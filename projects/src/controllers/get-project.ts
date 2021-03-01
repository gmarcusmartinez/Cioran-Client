import { Request, Response } from "express";
import { NotFoundError } from "@cioran/common/build";
import { Project } from "../models/Project";

export const getProject = async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) throw new NotFoundError();
  res.send(project);
};
