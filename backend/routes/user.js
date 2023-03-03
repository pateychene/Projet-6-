const express = require('express');

const verifyPassword = require('../middlewares/verifyPassword');

const router = express.Router();

const userCtrl = require('../controllers/user')


router.post('/signup', verifyPassword, userCtrl.signup) ;
router.post('/login', userCtrl.login);

module.exports = router;