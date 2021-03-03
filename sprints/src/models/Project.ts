import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";
import { TeamMember } from "@cioran/common";

interface ProjectAttrs {
  id: string;
  team: TeamMember[];
}

export interface ProjectDoc extends mongoose.Document {
  id: string;
  team: TeamMember[];
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

const projectSchema = new mongoose.Schema(
  {
    team: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        avatar: { type: String },
        role: { type: String, required: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

projectSchema.set("versionKey", "version");
projectSchema.plugin(updateIfCurrentPlugin);

projectSchema.statics.build = (attrs: ProjectAttrs) =>
  new Project({ _id: attrs.id, team: attrs.team });

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  "Project",
  projectSchema
);

export { Project };
