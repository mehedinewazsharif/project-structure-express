// Sample data for demonstration
const admins = [
  { id: 1, name: 'Admin 1' },
  { id: 2, name: 'Admin 2' },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create an admin
  // You can access request data using req.body
  const newAdmin = req.body;
  admins.push(newAdmin);
  res.status(201).json({ status: 'success', data: newAdmin });
};

exports.read = async (req, res) => {
  // Logic to read admins
  res.status(200).json({ status: 'success', data: admins });
};

exports.delete = async (req, res) => {
  // Logic to delete an admin
  // You can access request parameters using req.params
  const adminId = parseInt(req.params.id);
  const index = admins.findIndex((admin) => admin.id === adminId);

  if (index !== -1) {
    const deletedAdmin = admins.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedAdmin });
  } else {
    res.status(404).json({ status: 'error', message: 'Admin not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update an admin
  // You can access request parameters using req.params
  // You can access request data using req.body
  const adminId = parseInt(req.params.id);
  const updatedAdmin = req.body;
  const index = admins.findIndex((admin) => admin.id === adminId);

  if (index !== -1) {
    admins[index] = { ...admins[index], ...updatedAdmin };
    res.status(200).json({ status: 'success', data: admins[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Admin not found' });
  }
};
