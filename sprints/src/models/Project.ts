import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface ProjectAttrs {
  id: string;
}

export interface ProjectDoc extends mongoose.Document {
  id: string;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

const projectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

projectSchema.set('versionKey', 'version');
projectSchema.plugin(updateIfCurrentPlugin);

projectSchema.statics.build = (attrs: ProjectAttrs) =>
  new Project({ _id: attrs.id });

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
