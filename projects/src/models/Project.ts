import mongoose from 'mongoose';
import { UserDoc } from './User';
import { RoleType, TeamMember } from './TeamMember';
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
        id: { type: String, required: true },
        name: { type: String, required: true },
        avatar: { type: String, default: '' },
        role: { type: String },
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
  const { id, name, avatar } = user;
  const teamMember = { id, name, avatar, role };
  return this.team.push(teamMember);
};

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
