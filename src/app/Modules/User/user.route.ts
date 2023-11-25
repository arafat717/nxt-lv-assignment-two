import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUser);
router.get("/:userId", UserController.getSingleUser);

export const UserRoute = router;
