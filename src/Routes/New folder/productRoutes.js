const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

// Product routes
router.post('/create', productController.create);
router.get('/read', productController.read);
router.delete('/delete/:id', productController.delete);
router.put('/update/:id', productController.update);

module.exports = router;
