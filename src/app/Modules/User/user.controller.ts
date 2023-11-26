/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserService } from "./user.service";
import userValidationSchema from "./validation.joi";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const { value } = userValidationSchema.validate(user);
    const result = await UserService.createUserIntoDB(value);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Someting goes wrong",
      error: error.details,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getallUserFromDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Someting went wrong",
      error: error.details,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await UserService.getsingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const id = req.params.userId;
    const result = await UserService.updateUserFromDB(id, userData);

    res.status(200).json({
      success: true,
      message: "Users updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const delateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserService.deleteUserFromDB(id);

    res.status(200).json({
      success: true,
      message: "Users deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

export const UserController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  delateUser,
};
