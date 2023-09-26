// Sample data for demonstration
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a product
  // You can access request data using req.body
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json({ status: 'success', data: newProduct });
};

exports.read = async (req, res) => {
  // Logic to read products
  res.status(200).json({ status: 'success', data: products });
};

exports.delete = async (req, res) => {
  // Logic to delete a product
  // You can access request parameters using req.params
  const productId = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === productId);

  if (index !== -1) {
    const deletedProduct = products.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedProduct });
  } else {
    res.status(404).json({ status: 'error', message: 'Product not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a product
  // You can access request parameters using req.params
  // You can access request data using req.body
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = products.findIndex((product) => product.id === productId);

  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.status(200).json({ status: 'success', data: products[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Product not found' });
  }
};
