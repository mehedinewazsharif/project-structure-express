// Sample data for demonstration
const categories = [
  { id: 1, name: 'Category 1', description: 'Description of Category 1' },
  { id: 2, name: 'Category 2', description: 'Description of Category 2' },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a category
  // You can access request data using req.body
  const newCategory = req.body;
  categories.push(newCategory);
  res.status(201).json({ status: 'success', data: newCategory });
};

exports.read = async (req, res) => {
  // Logic to read categories
  res.status(200).json({ status: 'success', data: categories });
};

exports.delete = async (req, res) => {
  // Logic to delete a category
  // You can access request parameters using req.params
  const categoryId = parseInt(req.params.id);
  const index = categories.findIndex((category) => category.id === categoryId);

  if (index !== -1) {
    const deletedCategory = categories.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedCategory });
  } else {
    res.status(404).json({ status: 'error', message: 'Category not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a category
  // You can access request parameters using req.params
  // You can access request data using req.body
  const categoryId = parseInt(req.params.id);
  const updatedCategory = req.body;
  const index = categories.findIndex((category) => category.id === categoryId);

  if (index !== -1) {
    categories[index] = { ...categories[index], ...updatedCategory };
    res.status(200).json({ status: 'success', data: categories[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Category not found' });
  }
};
