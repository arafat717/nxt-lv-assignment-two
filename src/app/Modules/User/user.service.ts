import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getallUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getsingleUserFromDB = async (id: number) => {
  const result = await UserModel.findOne({ id });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getallUserFromDB,
  getsingleUserFromDB,
};
