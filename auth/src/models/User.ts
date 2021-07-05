import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { PasswordManager } from '../services/PasswordManager';

interface UserAttrs {
  name: string;
  email: string;
  password: string;
}

interface UserDoc extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  password: string;
  getSignedJwtToken(): string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema<UserDoc>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await PasswordManager.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.methods.getSignedJwtToken = function () {
  const { id, email, name } = this;
  return jwt.sign({ id, email, name }, process.env.JWT_KEY!);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
export { User };
