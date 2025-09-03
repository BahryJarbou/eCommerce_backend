import { Router } from "express";
import validateSchema from "../middlewares/validationMiddleware.js";
import OrderSchema from "../schemas/orderSchema.js";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.js";

const orderRouter = Router();

orderRouter.route("/").get(getOrders);
orderRouter.route("/:id").get(getOrderById);
orderRouter.route("/:id").delete(deleteOrder);

orderRouter.use(validateSchema(OrderSchema));
orderRouter.route("/").post(createOrder);
orderRouter.route("/:id").put(updateOrder);

export default orderRouter;