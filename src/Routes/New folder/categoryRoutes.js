const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryController');

// Category routes
router.post('/create', categoryController.create);
router.get('/read', categoryController.read);
router.delete('/delete/:id', categoryController.delete);
router.put('/update/:id', categoryController.update);

module.exports = router;
