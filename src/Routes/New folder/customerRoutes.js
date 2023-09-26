const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');

// Customer routes
router.post('/create', customerController.create);
router.get('/read', customerController.read);
router.delete('/delete/:id', customerController.delete);
router.put('/update/:id', customerController.update);

module.exports = router;
