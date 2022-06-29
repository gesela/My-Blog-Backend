const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router();

router.get("/", userController.getAllUser);
router.post("/signup",)


module.exports = router;