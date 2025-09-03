import { Router } from "express";
import {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";

const categoryRouter = Router();

//
categoryRouter.get("/", getCategories); // GET all categories
categoryRouter.post("/", createCategory); // CREATE new category
categoryRouter.get("/:id", getCategoryById); // GET category by id
categoryRouter.put("/:id", updateCategory); // UPDATE category
categoryRouter.delete("/:id", deleteCategory); // DELETE category

export default categoryRouter;
