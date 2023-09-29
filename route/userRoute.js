const express = require('express');
const router = express.Router();
const {getuser} = require('../controllers/usercontroller.js');


router.get('/getusers',getuser)

module.exports = router