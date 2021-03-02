import mongoose from 'mongoose';
import { UserDoc } from './User';
import { TeamMember, RoleType } from '@cioran/common/build';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

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
  team: TeamMember[];
  assignRole: (user: UserDoc, role: RoleType) => void;
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
      },
    },
  }
);

projectSchema.set('versionKey', 'version');
projectSchema.plugin(updateIfCurrentPlugin);
projectSchema.statics.build = (attrs: ProjectAttrs) => new Project(attrs);

projectSchema.methods.assignRole = function (user: UserDoc, role: RoleType) {
  const { name, avatar } = user;
  this.team.push({ name, avatar, role, _id: user.id });
};

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
