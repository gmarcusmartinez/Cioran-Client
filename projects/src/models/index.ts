import mongoose from 'mongoose';

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
