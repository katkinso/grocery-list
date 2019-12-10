const express = require("express");
const router = express.Router();
const helper = require("../auth/helpers");

const groceryController = require("../controllers/groceryController")

router.post("/api/groceries/create", helper.ensureAuthenticated, groceryController.create);
router.get("/api/groceries", helper.ensureAuthenticated, groceryController.all);
router.delete("/api/groceries/:id", helper.ensureAuthenticated, groceryController.delete);
router.put("/api/groceries/:id", helper.ensureAuthenticated, groceryController.update);


module.exports = router;