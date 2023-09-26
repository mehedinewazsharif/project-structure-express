const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const subAdminController = require('../Controllers/subAdminController');
const getController = require('../Controllers/getController');
const customerController = require('../Controllers/customerController');
const categoryController = require('../Controllers/categoryController');
const orderController = require('../Controllers/orderController');
const productController = require('../Controllers/productController');
const order_itemController = require('../Controllers/order_itemController');
const paymentController = require('../Controllers/paymentController');
const shipmentController = require('../Controllers/shipmentController');
const cartController = require('../Controllers/cartController');
const wishlistController = require('../Controllers/wishlistController');





// User routes
router.get('/user/create', userController.create);
router.get('/user/read', userController.read);
router.get('/user/delete', userController.delete);
router.get('/user/update', userController.update);


// Admin routes
router.get('/create', adminController.create);
router.get('/read', adminController.read);
router.get('/delete/:id', adminController.delete);
router.get('/update/:id', adminController.update);


// SubAdmin routes
router.get('/create', subAdminController.create);
router.get('/read', subAdminController.read);
router.get('/delete/:id', subAdminController.delete);
router.get('/update/:id', subAdminController.update);


// get routes
router.get('/create', getController.create);
router.get('/read', getController.read);
router.get('/delete/:id', getController.delete);
router.get('/update/:id', getController.update);


// Customer routes
router.get('/create', customerController.create);
router.get('/read', customerController.read);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.update);


// Category routes
router.get('/create', categoryController.create);
router.get('/read', categoryController.read);
router.get('/delete/:id', categoryController.delete);
router.get('/update/:id', categoryController.update);


// Order routes
router.get('/create', orderController.create);
router.get('/read', orderController.read);
router.get('/delete/:id', orderController.delete);
router.get('/update/:id', orderController.update);


// Product routes
router.get('/create', productController.create);
router.get('/read', productController.read);
router.get('/delete/:id', productController.delete);
router.get('/update/:id', productController.update);



// Order Item routes
router.get('/create', order_itemController.create);
router.get('/read', order_itemController.read);
router.get('/delete/:id', order_itemController.delete);
router.get('/update/:id', order_itemController.update);


// Payment routes
router.get('/create', paymentController.create);
router.get('/read', paymentController.read);
router.get('/delete/:id', paymentController.delete);
router.get('/update/:id', paymentController.update);


// Shipment routes
router.get('/create', shipmentController.create);
router.get('/read', shipmentController.read);
router.get('/delete/:id', shipmentController.delete);
router.get('/update/:id', shipmentController.update);


// Cart routes
router.get('/create', cartController.create);
router.get('/read', cartController.read);
router.get('/delete/:id', cartController.delete);
router.get('/update/:id', cartController.update);


// Wishlist routes
router.get('/create', wishlistController.create);
router.get('/read', wishlistController.read);
router.get('/delete/:id', wishlistController.delete);
router.get('/update/:id', wishlistController.update);

module.exports = router;
