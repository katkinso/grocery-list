'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grocery = sequelize.define('Grocery', {
    name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Grocery.associate = function(models) {
    Grocery.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Grocery;
};