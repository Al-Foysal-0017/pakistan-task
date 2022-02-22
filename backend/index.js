const express = require("express");
const env = require("./config/envConfig.js");
const connect = require("./config/db.js");
const userRoutes = require("./routes/users/userRoutes.js");
const app = express();

//database connection call
connect();

// add middaleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Naiem");
});

// user Routes
app.use("/api", userRoutes);

const port = env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
