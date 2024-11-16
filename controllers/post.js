// Middleware Functions שמטפלות בבקשה מסוימת (HTTP request).

const getAllPosts = (req, res) => {
  res.send("get all posts");
};

const creatPost = (req, res) => {
  res.send("created post");
};

module.exports = {
  getAllPosts,
  creatPost,
};
