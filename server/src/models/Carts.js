const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Carts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clothesSelect: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    paintingSelect: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
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
