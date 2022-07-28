const Buyer = require('../Modals/buyer');
const Seller = require('../Modals/seller');
const bcrypt = require('bcrypt');


const saltRounds = 10;

exports.register = async (req,res,next) => {
    const name = req.body.name;
    const password = req.body.password;
    const role = req.body.role;

    const hashPassword = await bcrypt.hash(password,saltRounds);
    if(role==='BUYER')
    {
        const doc = await Buyer.create({name,role,password:hashPassword});
        res.json(doc);
    }else {
        const doc = await Seller.create({name,role,password:hashPassword});
        res.json(doc);
    }

}

exports.login = async (req,res,next) => {

}