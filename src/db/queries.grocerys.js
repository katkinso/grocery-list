const Grocery = require("./models").Grocery;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  createGrocery(newGrocery, callback){
    return Grocery.create(newGrocery)
    .then((grocery) => {
      callback(null, grocery);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getGrocery(id, callback){
    return Grocery.findByPk(id)
    .then((grocery) => {
      callback(null, grocery);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getGrocerys(req, callback){
    return Grocery.findAll({
      order: [
        ['name', 'ASC'],
      ],
    })
    .then((grocerys) => {
      callback(null, grocerys);
    })
    .catch((err) => {
      callback(err);
    })
  },
  delete(id, callback){
    return Grocery.destroy({
      where: { id }
    })
    .then((deletedRecordsCount) => {
      callback(null, deletedRecordsCount);
    })
    .catch((err) => {
      callback(err);
    })
  },
  update(id, updatedGrocery, callback){

    return Grocery.findByPk(id)
    .then((grocery) => {

        if(!grocery){
          return callback("Grocery not found");
        }

        grocery.update(updatedGrocery, {
          fields: Object.keys(updatedGrocery)
        })
        .then((grocery) => {
          callback(null, grocery);
        })
        .catch((err) => {
          callback(err);
        })

    })
    .catch((err) => {
      callback(err);
    })
  }
}

