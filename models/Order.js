import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/server.js";

const Order = sequelize.define(
  "Order",
  {
    products: {
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("products"));
      },
      set: function (value) {
        return this.setDataValue("products", JSON.stringify(value));
      },
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Order;
