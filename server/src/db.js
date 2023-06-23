require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const cartModel = require('./models/Cart')
const clothesModel = require('./models/Clothes')
const orderModel = require('./models/Order')
const paintingModel = require('./models/Painting')
const userModel = require('./models/User')

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

const { user, cart, clothes, painting, order } = sequelize.models;

user.hasMany(cart);
cart.belongsTo(user);

cart.hasOne(order);
order.belongsTo(cart);

cart.belongsToMany(clothes, { through: 'CartClothing' });
clothes.belongsToMany(cart, { through: 'CartClothing' });

cart.belongsToMany(painting, { through: 'CartPainting' });
painting.belongsToMany(cart, { through: 'CartPainting' });

//console.log(sequelize.models);
module.exports = { sequelize, ...sequelize.models }
