'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MatHang.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    type: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
    riview_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MatHang',
  });
  return MatHang;
};