const express = require("express");
const { registerValidations } = require("../../validations/userValidation.js");
const { register } = require("../../controllers/user/userController.js");
const router = express.Router();

router.post("/register", registerValidations, register);

module.exports = router;
