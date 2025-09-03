import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

await Category.sync();

export default Category;
