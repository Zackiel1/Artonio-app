require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const cartModel = require('./models/Carts')
const clothesModel = require('./models/Clothes')
const orderModel = require('./models/Orders')
const paintingModel = require('./models/Paintings')
const userModel = require('./models/Users')

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

const { User, Cart, Clothes, Painting, Order } = sequelize.models;

User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasOne(Order);
Order.belongsTo(Cart);

Cart.belongsToMany(Clothes, { through: 'CartClothing' });
Clothes.belongsToMany(Cart, { through: 'CartClothing' });

Cart.belongsToMany(Painting, { through: 'CartPainting' });
Painting.belongsToMany(Cart, { through: 'CartPainting' });

//console.log(sequelize.models);
module.exports = { sequelize, ...sequelize.models }
