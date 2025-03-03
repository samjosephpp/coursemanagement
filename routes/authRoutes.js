const express = require('express')
const router = express.Router();
const authContoller = require('../controller/authController')

// to be connected to controller
router.post("/register", authContoller.registerAdmin)

router.post("/login", authContoller.login)

module.exports = router;
