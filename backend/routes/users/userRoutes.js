const express = require("express");
const {
  registerValidations,
  loginValidations,
} = require("../../validations/userValidation.js");
const { register, login } = require("../../controllers/user/userController.js");
const router = express.Router();

router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);

module.exports = router;
