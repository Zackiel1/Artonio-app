const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
