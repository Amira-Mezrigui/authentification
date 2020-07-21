const express = require('express');
const router = express.Router();

//importing controller 
const userController = require('../controllers/user');

//sign up route
router.post('/signup',userController.signup);
// sign in route
router.post('/login', userController.login);

module.exports = router;