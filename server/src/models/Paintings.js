const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Paintings", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
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
