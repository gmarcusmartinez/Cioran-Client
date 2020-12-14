import mongoose from "mongoose";
export enum RoleType {
  Admin = "admin",
  Member = "member",
}
interface UserAttrs {
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
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
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

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
