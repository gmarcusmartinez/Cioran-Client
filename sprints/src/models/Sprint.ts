import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { ProjectDoc } from './Project';

const { ObjectId } = mongoose.Schema.Types;

interface SprintAttrs {
  createdBy: string;
  project: ProjectDoc;
  title: string;
  subtitle?: string;
  startDate: Date;
  endDate: Date;
}

interface SprintDoc extends mongoose.Document {
  createdBy: string;
  project: ProjectDoc;
  title: string;
  subtitle: string;
  startDate: Date;
  endDate: Date;
}

interface SprintModel extends mongoose.Model<SprintDoc> {
  build(attrs: SprintAttrs): SprintDoc;
}

const sprintSchema = new mongoose.Schema(
  {
    createdBy: { type: String, required: true },
    project: { id: { type: ObjectId, ref: 'Project' } },
    title: { type: String, required: true, trim: true, maxlength: 40 },
    subtitle: { type: String, trim: true, maxlength: 140 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc: any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

sprintSchema.set('versionKey', 'version');
sprintSchema.plugin(updateIfCurrentPlugin);
sprintSchema.statics.build = (attrs: SprintAttrs) => new Sprint(attrs);

const Sprint = mongoose.model<SprintDoc, SprintModel>('Sprint', sprintSchema);

export { Sprint };
