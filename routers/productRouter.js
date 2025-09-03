import { Router } from "express";
import { validateSchema } from "../middlewares/validationMiddleware.js";
import ProductSchema from "../schemas/productSchema.js";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const productRouter = Router();

//  routes
productRouter.route("/").get(getProducts);
productRouter.route("/:id").get(getProductById);
productRouter.route("/:id").delete(deleteProduct);

// validation middleware for POST and PUT
productRouter.use(validateSchema(ProductSchema));
productRouter.route("/").post(createProduct);
productRouter.route("/:id").put(updateProduct);

export default productRouter;
