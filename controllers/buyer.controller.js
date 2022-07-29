const { Mongoose, default: mongoose } = require('mongoose');
const { SELLER } = require('../constants');
const Order = require('../Modals/Order.modal');
const User = require('../Modals/User.modal');
const ApiError = require('../utils/error');

exports.getListOfSellers = async(req,res,next) => {
    try {
        const sellersData = await User.find({role:SELLER});
        const sellers = sellersData.map((seller) => {
            return {
                sellerID:seller.id,
                userName:seller.userName
            }
        });
        const response = {
            status: 200,
            message: 'sellers fetched successfully',
            data:sellers
        }
        res.json(response);
    } catch (error) {
        next(error);
    }

}

exports.getSellerCatalog = async (req,res,next) => {
    try {
        const sellerId = req.params.seller_id;
        const seller = await User.findOne({_id: mongoose.Types.ObjectId(sellerId),role:SELLER});
        if(!seller)
        {
            throw new ApiError({status:404,message:'Seller not found'});
        }
        const response = {
            status:200,
            message:'seller catalog fetched successfully',
            data: seller.catalog
        }
        res.json(response);
    } catch (error) {
        next(error);
    }
}

exports.postCreateOrder = async (req,res,next) => {
    try {
        const sellerId = req.params.seller_id;
        const buyerId = req.user.id;
        const items =[];
        const itemIds = req.body.items.map((id)=>{
            return {
                _id:mongoose.Types.ObjectId(id),
                }
            }
        );
        const query = itemIds.map(element => {
            return {
                catalog:{$elemMatch:element}
            }
        });

        const seller = await User.findOne({_id:mongoose.Types.ObjectId(sellerId), $and:query});
        if(!seller)
        {
            throw new ApiError({status:400, message:'invalid Details'});
        }
        req.body.items.forEach(id=>{
            seller.catalog.forEach(item=>{
                if(id===item._id.toString())
                {
                    items.push(item);
                }
            });
        });
        const order = await Order.create({
            sellerId,
            buyerId,
            items
        });
        const response = {
            status:200,
            message:'order created successfully',
            data:{
                orderId:order._id,
                createdAt:order.createdAt,
                items:order.items
            }
        }
        
        res.json(response);
    } catch (error) {
        next(error);
    }
    
}