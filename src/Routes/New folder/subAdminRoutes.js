const express = require('express');
const router = express.Router();
const subAdminController = require('../Controllers/subAdminController');

// SubAdmin routes
router.post('/create', subAdminController.create);
router.get('/read', subAdminController.read);
router.delete('/delete/:id', subAdminController.delete);
router.put('/update/:id', subAdminController.update);

module.exports = router;
