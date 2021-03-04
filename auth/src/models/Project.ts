import mongoose from 'mongoose';

interface ProjectAttrs {
  id: string;
  title: string;
}
export interface ProjectDoc extends mongoose.Document {
  title: string;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

export const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
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

projectSchema.statics.build = (attrs: ProjectAttrs) => new Project(attrs);

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
