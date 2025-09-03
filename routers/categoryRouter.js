import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import CategorySchema from "../schemas/categorySchema.js";
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";

const categoryRouter = Router();

// routes
categoryRouter.route("/").get(getCategories);
categoryRouter.route("/:id").get(getCategoryById);
categoryRouter.route("/:id").delete(deleteCategory);

//validation middleware for POST and PUT
categoryRouter.use(validateSchema(CategorySchema));
categoryRouter.route("/").post(createCategory);
categoryRouter.route("/:id").put(updateCategory);

export default categoryRouter;
