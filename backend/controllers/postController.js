const Post = require("../models/Post");
module.exports.createPost = async (req, res) => {
  const { title, description, slug, id, name } = req.body;
  console.log(req.body);
  try {
    const response = await Post.create({
      title,
      description,
      slug,
      userName: name,
      userId: id,
    });
    return res.status(200).json({
      msg: "Your post has been created successfully",
      response,
    });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};
