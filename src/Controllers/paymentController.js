// Sample data for demonstration
const payments = [
  { id: 1, orderId: 1, amount: 50 },
  { id: 2, orderId: 2, amount: 75 },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a payment
  // You can access request data using req.body
  const newPayment = req.body;
  payments.push(newPayment);
  res.status(201).json({ status: 'success', data: newPayment });
};

exports.read = async (req, res) => {
  // Logic to read payments
  res.status(200).json({ status: 'success', data: payments });
};

exports.delete = async (req, res) => {
  // Logic to delete a payment
  // You can access request parameters using req.params
  const paymentId = parseInt(req.params.id);
  const index = payments.findIndex((payment) => payment.id === paymentId);

  if (index !== -1) {
    const deletedPayment = payments.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedPayment });
  } else {
    res.status(404).json({ status: 'error', message: 'Payment not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a payment
  // You can access request parameters using req.params
  // You can access request data using req.body
  const paymentId = parseInt(req.params.id);
  const updatedPayment = req.body;
  const index = payments.findIndex((payment) => payment.id === paymentId);

  if (index !== -1) {
    payments[index] = { ...payments[index], ...updatedPayment };
    res.status(200).json({ status: 'success', data: payments[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Payment not found' });
  }
};
