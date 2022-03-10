const Post = require("../models/Post");

module.exports.createPost = async (req, res) => {
  const { title, description, slug, id, name, image, level } = req.body;
  console.log(req.body);
  try {
    const response = await Post.create({
      title,
      description,
      slug,
      userName: name,
      userId: id,
      image,
      level,
    });
    return res.status(200).json({
      msg: "Your post has been created successfully",
      response,
    });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports.home = async (req, res) => {
  // const page = req.params.page;
  // const perPage = 6;
  // const skip = (page - 1) * perPage;
  try {
    const count = await Post.find({}).countDocuments();
    const posts = await Post.find({})
      // .skip(skip)
      // .limit(perPage)
      .sort({ updatedAt: 1 });
    return res.status(200).json({ response: posts });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};
