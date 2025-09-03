import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    hooks: {
      afterCreate: (record, options) => {
        delete record.dataValues.password;
      },
      afterUpdate: (record, options) => {
        delete record.dataValues.password;
      },
    },
  }
);
sequelize.sync();

export default User;
