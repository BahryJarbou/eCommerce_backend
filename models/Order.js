import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Order = sequelize.define(
  "Order",
  {
    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Order;
