const mongoose = require("mongoose");
const env = require("./envConfig.js");

const connect = async () => {
  try {
    await mongoose.connect(env.URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = connect;