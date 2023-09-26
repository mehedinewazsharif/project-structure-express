// Sample data for demonstration
const wishlists = [
  { id: 1, userId: 1, items: [{ productId: 1 }, { productId: 2 }] },
  { id: 2, userId: 2, items: [{ productId: 3 }, { productId: 4 }] },
  // Add more sample data here
];

exports.create = async (req, res) => {
  // Logic to create a wishlist
  // You can access request data using req.body
  const newWishlist = req.body;
  wishlists.push(newWishlist);
  res.status(201).json({ status: 'success', data: newWishlist });
};

exports.read = async (req, res) => {
  // Logic to read wishlists
  res.status(200).json({ status: 'success', data: wishlists });
};

exports.delete = async (req, res) => {
  // Logic to delete a wishlist
  // You can access request parameters using req.params
  const wishlistId = parseInt(req.params.id);
  const index = wishlists.findIndex((wishlist) => wishlist.id === wishlistId);

  if (index !== -1) {
    const deletedWishlist = wishlists.splice(index, 1)[0];
    res.status(200).json({ status: 'success', data: deletedWishlist });
  } else {
    res.status(404).json({ status: 'error', message: 'Wishlist not found' });
  }
};

exports.update = async (req, res) => {
  // Logic to update a wishlist
  // You can access request parameters using req.params
  // You can access request data using req.body
  const wishlistId = parseInt(req.params.id);
  const updatedWishlist = req.body;
  const index = wishlists.findIndex((wishlist) => wishlist.id === wishlistId);

  if (index !== -1) {
    wishlists[index] = { ...wishlists[index], ...updatedWishlist };
    res.status(200).json({ status: 'success', data: wishlists[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Wishlist not found' });
  }
};
