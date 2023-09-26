const express = require('express');
const router = express.Router();
const shipmentController = require('../Controllers/shipmentController');

// Shipment routes
router.post('/create', shipmentController.create);
router.get('/read', shipmentController.read);
router.delete('/delete/:id', shipmentController.delete);
router.put('/update/:id', shipmentController.update);

module.exports = router;
