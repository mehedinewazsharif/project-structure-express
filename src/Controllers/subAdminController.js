// Sample data for demonstration
const subAdmins = [
  { id: 1, name: 'SubAdmin 1' },
  { id: 2, name: 'SubAdmin 2' },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a sub-admin
  // You can access request data using req.body
  const newSubAdmin = req.body;
  subAdmins.push(newSubAdmin);
  res.status(201).json({ status: 'success', data: newSubAdmin });
};

exports.read = async (req, res) => {
  // Logic to read sub-admins
  res.status(200).json({ status: 'success', data: subAdmins });
};

exports.delete = async (req, res) => {
  // Logic to delete a sub-admin
  // You can access request parameters using req.params
  const subAdminId = parseInt(req.params.id);
  const index = subAdmins.findIndex((subAdmin) => subAdmin.id === subAdminId);

  if (index !== -1) {
    const deletedSubAdmin = subAdmins.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedSubAdmin });
  } else {
    res.status(404).json({ status: 'error', message: 'SubAdmin not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a sub-admin
  // You can access request parameters using req.params
  // You can access request data using req.body
  const subAdminId = parseInt(req.params.id);
  const updatedSubAdmin = req.body;
  const index = subAdmins.findIndex((subAdmin) => subAdmin.id === subAdminId);

  if (index !== -1) {
    subAdmins[index] = { ...subAdmins[index], ...updatedSubAdmin };
    res.status(200).json({ status: 'success', data: subAdmins[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'SubAdmin not found' });
  }
};
