// Sample data for demonstration
const posts = [
  { id: 1, title: 'Post 1', content: 'This is the content of Post 1' },
  { id: 2, title: 'Post 2', content: 'This is the content of Post 2' },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a post
  // You can access request data using req.body
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json({ status: 'success', data: newPost });
};

exports.read = async (req, res) => {
  // Logic to read posts
  res.status(200).json({ status: 'success', data: posts });
};

exports.delete = async (req, res) => {
  // Logic to delete a post
  // You can access request parameters using req.params
  const postId = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === postId);

  if (index !== -1) {
    const deletedPost = posts.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedPost });
  } else {
    res.status(404).json({ status: 'error', message: 'Post not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a post
  // You can access request parameters using req.params
  // You can access request data using req.body
  const postId = parseInt(req.params.id);
  const updatedPost = req.body;
  const index = posts.findIndex((post) => post.id === postId);

  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
    res.status(200).json({ status: 'success', data: posts[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Post not found' });
  }
};
