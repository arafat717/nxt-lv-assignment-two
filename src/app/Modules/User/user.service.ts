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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateUserFromDB = async (userId: number, userData: any) => {
  const result = await User.findOneAndUpdate({ userId }, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUserFromDB = async (userId: number) => {
  const result = await User.findOneAndDelete({ userId });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addProductToOrder = async (userId: number, product: any) => {
  const user = await User.findOne({ userId });
  if (!user) {
    throw new Error("user not found");
  }
  user.orders?.push(product);
  await user.save();
  return user;
};

const getTotalPriceOfOrders = async (userId: number) => {
  const user = await User.aggregate([
    { $match: { userId: userId } },
    {
      $unwind: "$orders",
    },
    {
      $group: {
        _id: "$_id",
        total: { $sum: { $multiply: ["$orders.price", "$orders.quantity"] } },
      },
    },
  ]);

  if (user && user.length > 0) {
    return user[0].total || 0;
  } else {
    throw new Error("User not found");
  }
};

const getAllOrdersForUser = async (userId: number) => {
  const user = await User.aggregate([
    { $match: { userId: userId } },
    {
      $project: {
        orders: "$orders",
      },
    },
  ]);

  if (user && user.length > 0) {
    return user[0];
  } else {
    throw new Error("User not found");
  }
};

export const UserService = {
  createUserIntoDB,
  getallUserFromDB,
  getsingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
  addProductToOrder,
  getTotalPriceOfOrders,
  getAllOrdersForUser,
};
