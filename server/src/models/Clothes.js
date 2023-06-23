const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("clothes", {
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
    size: {
      type: DataTypes.ARRAY(DataTypes.STRING(5)),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
      defaultValue: "0",
    },
  });
};
