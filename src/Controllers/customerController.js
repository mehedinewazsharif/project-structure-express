// Sample data for demonstration
const customers = [
  { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
  { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a customer
  // You can access request data using req.body
  const newCustomer = req.body;
  customers.push(newCustomer);
  res.status(201).json({ status: 'success', data: newCustomer });
};

exports.read = async (req, res) => {
  // Logic to read customers
  res.status(200).json({ status: 'success', data: customers });
};

exports.delete = async (req, res) => {
  // Logic to delete a customer
  // You can access request parameters using req.params
  const customerId = parseInt(req.params.id);
  const index = customers.findIndex((customer) => customer.id === customerId);

  if (index !== -1) {
    const deletedCustomer = customers.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedCustomer });
  } else {
    res.status(404).json({ status: 'error', message: 'Customer not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a customer
  // You can access request parameters using req.params
  // You can access request data using req.body
  const customerId = parseInt(req.params.id);
  const updatedCustomer = req.body;
  const index = customers.findIndex((customer) => customer.id === customerId);

  if (index !== -1) {
    customers[index] = { ...customers[index], ...updatedCustomer };
    res.status(200).json({ status: 'success', data: customers[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Customer not found' });
  }
};
