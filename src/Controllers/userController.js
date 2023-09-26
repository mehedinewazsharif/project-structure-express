// Sample data for demonstration
const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a user
  // You can access request data using req.body
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ status: 'success', data: newUser });
};

exports.read = async (req, res) => {
  // Logic to read users
  res.status(200).json({ status: 'success', data: users });
};

exports.delete = async (req, res) => {
  // Logic to delete a user
  // You can access request parameters using req.params
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedUser });
  } else {
    res.status(404).json({ status: 'error', message: 'User not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a user
  // You can access request parameters using req.params
  // You can access request data using req.body
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.status(200).json({ status: 'success', data: users[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'User not found' });
  }
};
