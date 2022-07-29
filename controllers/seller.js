const { default: mongoose } = require("mongoose");
const User = require("../Modals/User");

exports.postCreateCalatog= async (req,res,next) => {
    try {
        const sellerId = req.user.id;
        const catalog = req.body.catalog;
        const doc = await User.findOneAndUpdate({_id: mongoose.Types.ObjectId(sellerId)},{
            $push:{
                catalog:catalog
            }
        },{
            new:true
        });
        const response = {
            status: 200,
            message: 'items  added successfully',
            data:doc.catalog
        }
        res.json(response);
    } catch (error) {
        next(error);
    }

}

exports.getOrders = (req,res,next) => {

}