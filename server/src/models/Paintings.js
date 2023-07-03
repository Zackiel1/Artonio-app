const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Painting", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
      defaultValue: "0",
    },
  });
};
