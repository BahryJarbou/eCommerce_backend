import sequelize from "./index.js";
import User from "../models/User.js";

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

sequelize.sync();
