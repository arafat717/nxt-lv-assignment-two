import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUser);
router.get("/:userId", UserController.getSingleUser);
router.delete("/:userId", UserController.delateUser);
router.put("/:userId", UserController.updateUser);
router.put("/:userId/orders", UserController.addedproduct);
router.get("/:userId/orders/total-price", UserController.getTotalPriceOfOrders);
router.get("/:userId/orders", UserController.getAllOrdersForUser);

export const UserRoute = router;
