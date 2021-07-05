import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { ITeamMember } from '@cioran/common';

interface ProjectAttrs {
  id: string;
  team: ITeamMember[];
}

export interface ProjectDoc extends mongoose.Document {
  team: ITeamMember[];
}

export const transformDoc = {
  transform(doc: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
};

export const teamMemberSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    role: { type: String, required: true },
  },
  { toJSON: transformDoc }
);

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

const projectSchema = new mongoose.Schema(
  {
    team: [teamMemberSchema],
  },
  { toJSON: transformDoc }
);

projectSchema.set('versionKey', 'version');
projectSchema.plugin(updateIfCurrentPlugin);

projectSchema.statics.build = (attrs: ProjectAttrs) =>
  new Project({ _id: attrs.id, team: attrs.team });

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
