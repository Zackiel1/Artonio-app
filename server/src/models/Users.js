const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    discount: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: [{discount:'20%',reason:"Suscripcion en Web",discountId: Math.floor(Math.random() * 1000000),}],
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tokenRecover: {
      type: DataTypes.INTEGER,
    },
  });
};
