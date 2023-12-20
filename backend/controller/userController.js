const catchAsyncErrors = require('../midleware/catchAsyncErrors');
const User = require('../model/userModel');
const ErrorHandler = require('../utils/ErrorHandler');

exports.register = catchAsyncErrors(async (req, res, next) => {

    const {email} = req.body
    const userEmail = await User.findOne({email});
    if(userEmail){
        return next( new ErrorHandler("Email Already Exist") )
    }

    const newUser = await User.create(req.body);
    res.status(200).json({success: true, newUser});
})