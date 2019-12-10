const groceryQueries = require("../db/queries.grocerys.js");
var request = require('request');

module.exports = {
    create(req, res, next){

        console.log("got here")

        let newGrocery= {
            name: req.body.name,
            description: req.body.description,
            purchased: req.body.purchased,
            userId: 1
        };

        groceryQueries.createGrocery(newGrocery, (err, grocery) => {
          if(err){
               res.status(403).json(err)
          } else {
              res.json(grocery);
          }
        });
   },
   all(req, res, next){

      groceryQueries.getGrocerys(req, (err, grocerys) => {
        if(err){
            res.json({error: "No grocerys found"})
        } else {
            res.json(grocerys);
        }
      });
  },
   delete(req, res, next){

        groceryQueries.delete(req.params.id, (err, grocery) => {
            if(err){
                res.json({error: "Grocery not found"})
            } else {
                res.json(grocery);
            }
        });
    },
   update(req, res, next){

        groceryQueries.update(req.params.id, req.body, (err, grocery) => {
            if(err){
                res.json({error: "Grocery not found"})
            } else {
                res.json(grocery);
            }
        });
    }
  
}