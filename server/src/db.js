require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const cartModel = require("./models/Carts");
const clothesModel = require("./models/Clothes");
const orderModel = require("./models/Orders");
const paintingModel = require("./models/Paintings");
const userModel = require("./models/Users");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/artonio`,
  {
    logging: false,
    native: false,
  }
);

cartModel(sequelize);
clothesModel(sequelize);
orderModel(sequelize);
paintingModel(sequelize);
userModel(sequelize);

const { Users, Carts, Clothes, Paintings, Orders } = sequelize.models;

Users.hasMany(Carts);
Carts.belongsTo(Users);

Carts.hasOne(Orders);
Orders.belongsTo(Carts);

Carts.belongsToMany(Clothes, { through: "CartsClothings" });
Clothes.belongsToMany(Carts, { through: "CartsClothings" });

Carts.belongsToMany(Paintings, { through: "CartsPaintings" });
Paintings.belongsToMany(Carts, { through: "CartsPaintings" });

//console.log(sequelize.models);
module.exports = { sequelize, ...sequelize.models };
