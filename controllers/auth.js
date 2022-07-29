const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Modals/User');
const httpstatus = require('http-status');
const ApiError = require('../utils/error');
const {jwtSecret} = require('../constants')

const saltRounds = 10;

exports.register = async (req,res,next) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const role = req.body.role;
        const user = await User.findOne({userName});
        if(user)
        {
            throw new ApiError({status:400,message:'user already registered'});
        }
        const hashPassword = await bcrypt.hash(password,saltRounds);
        const doc = await User.create({userName,role,password:hashPassword});
        res.json(doc);
    } catch (error) {
        return next(error);
    }
   
}

exports.login = async (req,res,next) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const user = await User.findOne({userName:userName});
        if(!user)
        {
            throw new ApiError({status:403,message:'username or password incorrect'});
        }
        const verdict = await bcrypt.compare(password,user.password);
        if(!verdict)
        {
            throw new ApiError({status:403,message:'username or password incorrect'});

        }
        const token = jwt.sign({username:user.userName, role: user.role, id:user._id},jwtSecret,{expiresIn:'3h',algorithm:'HS256'});
        const response = {
            status:200,
            message:'login success',
            data:{
                user:user.userName,
                token:token,
            }
        }
        res.json(response);

    } catch (error) {
        next(error);
    }


}