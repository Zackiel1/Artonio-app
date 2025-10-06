const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Posts", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE, 
            allowNull: false,
            defaultValue: DataTypes.NOW, 
        },
    })
}