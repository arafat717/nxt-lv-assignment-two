import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (user: TUser) => {
  if (await User.isUserExists(user.userId)) {
    throw new Error("User is Exist");
  }
  const result = await User.create(user);
  return result;
};

const getallUserFromDB = async () => {
  const result = await User.find();
  return result;
};

const getsingleUserFromDB = async (userId: number) => {
  const result = await User.findOne({ userId });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getallUserFromDB,
  getsingleUserFromDB,
};
