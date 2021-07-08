import mongoose from 'mongoose';

export const teamMemberSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  role: { type: String, required: true },
});
