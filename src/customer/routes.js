// const { router } = require("express");
const controller = require("./controller");
const express = require('express');

const router = express.Router();

router.get("/", controller.getcustomer);
router.get("/:email", controller.getcustomerByEmail);
router.put("/:id", controller.updatecustomer);
router.delete("/:id", controller.deletecustomer);
router.post('/signup', controller.signup);
router.post('/login', controller.login);


module.exports = router; //creating router objcts adding routes to it--- then importing the router in server.js files
