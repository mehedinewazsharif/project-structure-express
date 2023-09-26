const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');

// Order routes
router.post('/create', orderController.create);
router.get('/read', orderController.read);
router.delete('/delete/:id', orderController.delete);
router.put('/update/:id', orderController.update);

module.exports = router;
