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
  createdAt: Date;
  updatedAt: Date;
}

interface SprintModel extends mongoose.Model<SprintDoc> {
  build(attrs: SprintAttrs): SprintDoc;
}
const { ObjectId } = mongoose.Schema.Types;

const sprintSchema = new mongoose.Schema({
  project: { id: { type: ObjectId, ref: 'Project' } },
  title: { type: String, required: true, trim: true, maxlength: 40 },
  objective: { type: String, trim: true, maxlength: 140 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

sprintSchema.set('versionKey', 'version');
sprintSchema.plugin(updateIfCurrentPlugin);
sprintSchema.statics.build = (attrs: SprintAttrs) => new Sprint(attrs);

const Sprint = mongoose.model<SprintDoc, SprintModel>('Sprint', sprintSchema);

export { Sprint };
