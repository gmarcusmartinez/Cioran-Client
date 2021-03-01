import mongoose from 'mongoose';

interface ProjectAttrs {
  id: string;
  title: string;
}

export interface ProjectDoc extends mongoose.Document {
  id: string;
  title: string;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

export const projectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
      },
    },
  }
);

projectSchema.statics.build = (attrs: ProjectAttrs) => new Project(attrs);

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
