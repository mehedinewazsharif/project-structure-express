const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

// Admin routes
router.post('/create', adminController.create);
router.get('/read', adminController.read);
router.delete('/delete/:id', adminController.delete);
router.put('/update/:id', adminController.update);

module.exports = router;
