const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const path = require("path");
const router = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const profileRoutes = require("./routes/profileRoutes");
require("dotenv").config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect mongodb database
connect();
app.use(bodyParser.json());
app.use("/", router);
app.use("/", postRoutes);
app.use("/", profileRoutes);
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build/")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("Your app is running");
});
