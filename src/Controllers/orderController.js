// Sample data for demonstration
const orders = [
  { id: 1, customer: 'Customer 1', totalAmount: 100 },
  { id: 2, customer: 'Customer 2', totalAmount: 200 },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create an order
  // You can access request data using req.body
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json({ status: 'success', data: newOrder });
};

exports.read = async (req, res) => {
  // Logic to read orders
  res.status(200).json({ status: 'success', data: orders });
};

exports.delete = async (req, res) => {
  // Logic to delete an order
  // You can access request parameters using req.params
  const orderId = parseInt(req.params.id);
  const index = orders.findIndex((order) => order.id === orderId);

  if (index !== -1) {
    const deletedOrder = orders.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedOrder });
  } else {
    res.status(404).json({ status: 'error', message: 'Order not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update an order
  // You can access request parameters using req.params
  // You can access request data using req.body
  const orderId = parseInt(req.params.id);
  const updatedOrder = req.body;
  const index = orders.findIndex((order) => order.id === orderId);

  if (index !== -1) {
    orders[index] = { ...orders[index], ...updatedOrder };
    res.status(200).json({ status: 'success', data: orders[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Order not found' });
  }
};
