const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    selectProduct: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("in process", "success"),
      defaultValue: "in process",
    },
  });
};
