const express = require('express');
const router = express.Router();
const paymentController = require('../Controllers/paymentController');

// Payment routes
router.post('/create', paymentController.create);
router.get('/read', paymentController.read);
router.delete('/delete/:id', paymentController.delete);
router.put('/update/:id', paymentController.update);

module.exports = router;
