import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface UserAttrs {
  id: string;
  name: string;
  avatar: string;
}

export interface UserDoc extends mongoose.Document {
  name: string;
  avatar: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, default: '' },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

userSchema.set('versionKey', 'version');
userSchema.plugin(updateIfCurrentPlugin);

userSchema.statics.build = (attrs: UserAttrs) =>
  new User({ _id: attrs.id, name: attrs.name, avatar: attrs.avatar });

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
