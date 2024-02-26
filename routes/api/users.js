const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'

// GET /feature
router.get('/', usersCtrl.index);
// GET /best-sellers
router.get('/best-sellers', usersCtrl.bestSellers);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// POST /api/users (create a user - sign up)
router.post('/checkout', ensureLoggedIn, usersCtrl.checkout);

module.exports = router;