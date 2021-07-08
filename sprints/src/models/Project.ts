import mongoose from 'mongoose';
import { ITeamMember } from '@cioran/common';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface ProjectAttrs {
  team: ITeamMember[];
}

export interface ProjectDoc extends mongoose.Document {
  team: ITeamMember[];
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

const projectSchema = new mongoose.Schema(
  {
    team: [{ _id: { type: String }, role: { type: String } }],
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

projectSchema.statics.build = (attrs: ProjectAttrs) => new Project(attrs);

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
