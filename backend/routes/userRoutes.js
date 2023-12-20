const express = require('express');
const {register} = require('../controller/userController');

const router = express.Router();

router.post("/register", register);
router.post("/login",(req,res)=>{res.send("login")});


module.exports = router;