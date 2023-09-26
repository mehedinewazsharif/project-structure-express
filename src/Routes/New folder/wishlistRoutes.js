const express = require('express');
const router = express.Router();
const wishlistController = require('../Controllers/wishlistController');

// Wishlist routes
router.post('/create', wishlistController.create);
router.get('/read', wishlistController.read);
router.delete('/delete/:id', wishlistController.delete);
router.put('/update/:id', wishlistController.update);

module.exports = router;
