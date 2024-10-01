import Category from "./Category.js";
import Product from "./Product.js";
import Order from "./Order.js";

Category.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
});

Product.belongsTo(Category, {
  foreignKey: { allowNull: false, name: "categoryId" },
  onDelete: "CASCADE",
});

Category.sync({ force: true });
Product.sync({ force: true });
Order.sync({ force: true });
