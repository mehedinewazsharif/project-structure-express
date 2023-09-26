// Sample data for demonstration
const orderItems = [
  { id: 1, orderId: 1, productId: 1, quantity: 2 },
  { id: 2, orderId: 1, productId: 2, quantity: 3 },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create an order item
  // You can access request data using req.body
  const newOrderItem = req.body;
  orderItems.push(newOrderItem);
  res.status(201).json({ status: 'success', data: newOrderItem });
};

exports.read = async (req, res) => {
  // Logic to read order items
  res.status(200).json({ status: 'success', data: orderItems });
};

exports.delete = async (req, res) => {
  // Logic to delete an order item
  // You can access request parameters using req.params
  const orderItemId = parseInt(req.params.id);
  const index = orderItems.findIndex((orderItem) => orderItem.id === orderItemId);

  if (index !== -1) {
    const deletedOrderItem = orderItems.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedOrderItem });
  } else {
    res.status(404).json({ status: 'error', message: 'Order item not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update an order item
  // You can access request parameters using req.params
  // You can access request data using req.body
  const orderItemId = parseInt(req.params.id);
  const updatedOrderItem = req.body;
  const index = orderItems.findIndex((orderItem) => orderItem.id === orderItemId);

  if (index !== -1) {
    orderItems[index] = { ...orderItems[index], ...updatedOrderItem };
    res.status(200).json({ status: 'success', data: orderItems[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Order item not found' });
  }
};
