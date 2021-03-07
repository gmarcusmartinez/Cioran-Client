import mongoose from 'mongoose';
import { ITeamMember, RoleType } from '@cioran/common/build';

interface ProjectAttrs {
  title: string;
  slug: string;
  projectOwner: string;
}

interface ProjectDoc extends mongoose.Document {
  id: string;
  title: string;
  slug: string;
  projectOwner: string;
  team: ITeamMember[];
  assignRole: (id: string, role: RoleType) => void;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

const projectSchema = new mongoose.Schema<ProjectDoc>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
    projectOwner: { type: String, required: true },
    team: [
      {
        _id: { type: String, required: true },
        role: { type: String, required: true },
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

projectSchema.set('versionKey', 'version');
projectSchema.statics.build = (attrs: ProjectAttrs) => new Project(attrs);

projectSchema.methods.assignRole = function (id: string, role: RoleType) {
  this.team.push({ role, _id: id });
};

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
