const { Mongoose, default: mongoose } = require('mongoose');
const { SELLER } = require('../constants');
const User = require('../Modals/User');
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

exports.postCreateOrder = (req,res,next) => {

}