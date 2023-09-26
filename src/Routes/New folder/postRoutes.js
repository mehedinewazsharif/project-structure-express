const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postController');

// Post routes
router.post('/create', postController.create);
router.get('/read', postController.read);
router.delete('/delete/:id', postController.delete);
router.put('/update/:id', postController.update);

module.exports = router;
