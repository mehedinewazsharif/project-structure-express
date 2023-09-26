const express = require('express');
const router = express.Router();
const order_itemController = require('../Controllers/order_itemController');

// Order Item routes
router.post('/create', order_itemController.create);
router.get('/read', order_itemController.read);
router.delete('/delete/:id', order_itemController.delete);
router.put('/update/:id', order_itemController.update);

module.exports = router;
