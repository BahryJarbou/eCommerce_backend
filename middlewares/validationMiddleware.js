import UserSchema from "../schemas/userSchema.js";
import CategorySchema from "../schemas/categorySchema.js";
import ProductSchema from "../schemas/productSchema.js";
import OrderSchema from "../schemas/orderSchema.js";
import Product from "../models/Product.js";

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
  if (params === OrderSchema) {
    if (!result.success) {
      throw new Error("UserId, products are required", { cause: 400 });
    } else {
      next();
    }
  }
};

const productsExists = async (req, res, next) => {
  const {
    body: { products },
  } = req;
  let exists = true;
  for (let key in products) {
    console.log(key);
    const found = await Product.findByPk(products[key].productId);
    if (!found) {
      exists = false;
      break;
    }
  }
  if (!exists) {
    throw new Error("one of the products does not exist.", { cause: 400 });
  }

  next();
};

export { validateSchema, productsExists };
