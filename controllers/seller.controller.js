const { default: mongoose } = require('mongoose');
const Order = require('../Modals/Order.modal');
const User = require('../Modals/User.modal');

exports.postCreateCalatog = async (req, res, next) => {
  try {
    const sellerId = req.user.id;
    const { catalog } = req.body;
    const doc = await User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(sellerId) }, {
      $push: {
        catalog,
      },
    }, {
      new: true,
    });
    const response = {
      status: 200,
      message: 'items  added successfully',
      data: doc.catalog,
    };
    res.json(response);
  } catch (error) {
    next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const sellerId = req.user.id;
    const orders = await Order.find({ selledId: mongoose.Types.ObjectId(sellerId) });

    const response = {
      status: 200,
      message: 'orders fetched successfully',
      data: orders,
    };
    res.json(response);
  } catch (error) {
    next(error);
  }
};
