const { validationResult } = require("express-validator");
const UserModel = require("../../models/User.js");
const {
  hasedPassword,
  createToken,
} = require("../../services/authServices.js");

// @route POST api/register
// @access Public
// @desc Create user & return a token
module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        const hashed = await hasedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
          // admin: false,
        });
        const token = createToken({ id: user._id, name: user.name });
        return res
          .status(201)
          .json({ msg: "Your account has been created successfully.", token });
      } else {
        // Email already taken
        return res
          .status(401)
          .json({ errors: [{ msg: `${email} is already taken` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error.");
    }
  } else {
    // validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};
