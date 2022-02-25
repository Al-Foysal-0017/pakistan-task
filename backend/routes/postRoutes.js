const express = require("express");
const router = express.Router();
const {
  createPost,
  //   fetchPosts,
  //   fetchPost,
  //   updatePost,
  //   updateValidations,
  //   updateImage,
  //   deletePost,
  home,
  //   postDetails,
  //   postComment,
} = require("../controllers/postController");
const auth = require("../utils/auth");
router.post("/create_post", createPost);
// router.post("/update", [auth, updateValidations], updatePost);
// router.post("/updateImage", auth, updateImage);
// router.get("/posts/:id/:page", auth, fetchPosts);
// router.get("/post/:id", auth, fetchPost);
// router.get("/delete/:id", auth, deletePost);
router.get("/home", home);
// router.get("/explore/:id", postDetails);
// router.post("/comment", auth, postComment);
module.exports = router;
