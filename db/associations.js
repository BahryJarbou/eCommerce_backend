import sequelize from "./index.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";
// users-orders table associations
User.hasMany(Order, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});

Order.belongsTo(User, {
  foreignKey: { allowNull: false, name: "userId" },
  onDelete: "CASCADE",
});

// orders-porducts associations

Product.belongsToMany({ through: "Orders_Porducts" });
Order.belongsToMany({ through: "Orders_Products" });

// products-categories associations
Category.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
});

Product.belongsTo(Category, {
  foreignKey: { allowNull: false, name: "categoryId" },
});

sequelize.sync();
