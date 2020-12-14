import mongoose from "mongoose";

interface ProjectAttrs {
  title: string;
}

export interface ProjectDoc extends mongoose.Document {
  title: string;
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
const Project = mongoose.model<ProjectDoc, ProjectModel>(
  "Project",
  projectSchema
);

export { Project };
