import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface SprintAttrs {
  project: string;
  title: string;
  objective: string;
  startDate: Date;
  endDate: Date;
}

interface SprintDoc extends mongoose.Document {
  id: string;
  project: string;
  title: string;
  objective: string;
  startDate: Date;
  endDate: Date;
}

interface SprintModel extends mongoose.Model<SprintDoc> {
  build(attrs: SprintAttrs): SprintDoc;
}
const { ObjectId } = mongoose.Schema.Types;

const sprintSchema = new mongoose.Schema(
  {
    project: { id: { type: ObjectId, ref: 'Project' } },
    title: { type: String, required: true, trim: true, maxlength: 40 },
    objective: { type: String, trim: true, maxlength: 140 },
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
