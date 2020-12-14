import mongoose from "mongoose";
import { UserDoc, RoleType } from "./User";

interface UserSubDoc extends UserDoc {
  role: RoleType;
}

interface ProjectAttrs {
  title: string;
  slug: string;
  projectOwner: string;
}

interface ProjectDoc extends mongoose.Document {
  title: string;
  slug: string;
  projectOwner: string;
  team: UserSubDoc[];
  assignRole: (user: UserDoc, role: RoleType) => UserSubDoc;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
    },
    projectOwner: {
      type: String,
      required: true,
    },
    team: [
      {
        id: String,
        name: String,
        avatar: String,
        role: String,
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

projectSchema.statics.build = (attrs: ProjectAttrs) => {
  return new Project(attrs);
};

projectSchema.methods.assignRole = function (user: UserDoc, role: RoleType) {
  const userSubDoc = { ...user, role };
  return this.team.push(userSubDoc);
};

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  "Project",
  projectSchema
);

export { Project };
