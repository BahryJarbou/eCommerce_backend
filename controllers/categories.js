import Category from "../models/Category.js";
import CategorySchema from "../schemas/categorySchema.js";

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new category
export const createCategory = async (req, res) => {
  try {
    // Validate input data with Zod
    const validatedData = CategorySchema.parse(req.body);

    // Create a new category
    const category = await Category.create(validatedData);
    res.status(201).json(category);
  } catch (error) {
    // If validation fails, return 400
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: error.message });
  }
};

// Get category by id
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate input data
    const validatedData = CategorySchema.parse(req.body);

    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    // Update category
    await category.update(validatedData);
    res.json(category);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: error.message });
  }
};

// Delete a category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    // Delete category
    await category.destroy();
    res.json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
