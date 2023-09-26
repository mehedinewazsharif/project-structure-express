const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController');

// Cart routes
router.post('/create', cartController.create);
router.get('/read', cartController.read);
router.delete('/delete/:id', cartController.delete);
router.put('/update/:id', cartController.update);

module.exports = router;
