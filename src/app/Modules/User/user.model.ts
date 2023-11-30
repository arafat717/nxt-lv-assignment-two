/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const productSchema = new Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<TUser, UserModel>({
  userId: {
    type: Number,
    required: [true, "userId is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
  hobbies: [
    {
      type: String,
      required: true,
      validate: {
        validator: (arr: string) => arr.length <= 10,
        message: "Too many hobbies",
      },
    },
  ],

  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [productSchema],
});

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (user.password) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_round)
    );
  }

  next();
});

userSchema.post("save", function (doc, next) {
  delete (doc as any)._doc.password;
  next();
});

userSchema.pre("findOne", function (next) {
  this.select(
    "username email address fullName age orders userId isActive hobbies"
  );
  this.find({ isdeleted: { $ne: true } });
  next();
});

userSchema.pre("find", function (next) {
  this.select("username email address fullName age orders");
  this.find({ isdeleted: { $ne: true } });
  next();
});

userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId: userId });
  return existingUser;
};

export const User = model<TUser, UserModel>("User", userSchema);
