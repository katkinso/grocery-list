const express = require("express");
const router = express.Router();
const { userValidationRules, validate } = require('./validation')
const helper = require("../auth/helpers");

const userController = require("../controllers/userController")

router.post("/api/users/register", userValidationRules, validate, userController.register);
router.post("/api/users/authenticate", userController.authenticate);
router.get("/api/users/logout", userController.logout);
router.get("/api/users/protected", helper.ensureAuthenticated, userController.protectedTest); //test route
router.get("/api/users/unprotected", userController.unprotectedTest); //test route
router.get("/api/users/me", helper.ensureAuthenticated, userController.getMe);
router.get("/api/users/:id", helper.ensureAuthenticated, userController.getUser);


module.exports = router;