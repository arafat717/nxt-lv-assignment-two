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
  if (await User.isUserExists(userId)) {
    const result = await User.findOne({ userId });
    return result;
  } else {
    throw new Error("user is not found");
  }
};

// const deleteUserFromDB = async (userId: number) => {
//   if (await User.isUserExists(userId)) {
//     const result = await User.updateOne({ userId }, { isdeleted: true });
//     return result;
//   } else {
//     throw new Error("user is not found");
//   }
// };

const updateUserFromDB = async (id: string, userData: TUser) => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUserIntoDB,
  getallUserFromDB,
  getsingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
