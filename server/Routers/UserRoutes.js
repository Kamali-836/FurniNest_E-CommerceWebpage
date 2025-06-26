const express = require('express');
const router = express.Router();
const authController = require('../Controllers/UserController');

// User routes
router.post('/signup', authController.signupUser);
router.post('/login', authController.loginUser);
router.post('/reset-password', authController.resetPasswordRequest);

// Contact route
router.post('/contact', authController.submitContactForm);

module.exports = router;
