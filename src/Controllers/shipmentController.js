// Sample data for demonstration
const shipments = [
  { id: 1, orderId: 1, status: 'Shipped' },
  { id: 2, orderId: 2, status: 'In Transit' },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a shipment
  // You can access request data using req.body
  const newShipment = req.body;
  shipments.push(newShipment);
  res.status(201).json({ status: 'success', data: newShipment });
};

exports.read = async (req, res) => {
  // Logic to read shipments
  res.status(200).json({ status: 'success', data: shipments });
};

exports.delete = async (req, res) => {
  // Logic to delete a shipment
  // You can access request parameters using req.params
  const shipmentId = parseInt(req.params.id);
  const index = shipments.findIndex((shipment) => shipment.id === shipmentId);

  if (index !== -1) {
    const deletedShipment = shipments.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedShipment });
  } else {
    res.status(404).json({ status: 'error', message: 'Shipment not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a shipment
  // You can access request parameters using req.params
  // You can access request data using req.body
  const shipmentId = parseInt(req.params.id);
  const updatedShipment = req.body;
  const index = shipments.findIndex((shipment) => shipment.id === shipmentId);

  if (index !== -1) {
    shipments[index] = { ...shipments[index], ...updatedShipment };
    res.status(200).json({ status: 'success', data: shipments[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Shipment not found' });
  }
};
