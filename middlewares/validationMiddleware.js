import UserSchema from "../schemas/userSchema.js";
import CategorySchema from "../schemas/categorySchema.js";
import ProductSchema from "../schemas/productSchema.js";

const validateSchema = (params) => (req, res, next) => {
  const result = params.safeParse(req.body);

  if (params === UserSchema) {
    if (!result.success) {
      throw new Error(
        "Name, email, and password are required and in the right form.",
        { cause: 400 }
      );
    } else {
      next();
    }
  }
  if (params === CategorySchema) {
    if (!result.success) {
      throw new Error("Name is required", { cause: 400 });
    } else {
      next();
    }
  }
  if (params === ProductSchema) {
    if (!result.success) {
      throw new Error("Name, description, and price are required.", {
        cause: 400,
      });
    } else {
      next();
    }
  }
};

export default validateSchema;
