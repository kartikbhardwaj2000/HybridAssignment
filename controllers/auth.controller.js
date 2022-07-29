const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Modals/User.modal');
const ApiError = require('../utils/error');
const { JWT_SECRET } = require('../constants');

const saltRounds = 10;

exports.register = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const { password } = req.body;
    const { role } = req.body;
    const user = await User.findOne({ userName });
    if (user) {
      throw new ApiError({ status: 400, message: 'user already registered' });
    }
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const userDoc = await User.create({ userName, role, password: hashPassword });
    const response = {
      status: 200,
      message: 'registeration success',
      data: {
        user: userDoc.username,
        userId: userDoc._id,
      },
    };
    res.json(response);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const { password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      throw new ApiError({ status: 403, message: 'username or password incorrect' });
    }
    const verdict = await bcrypt.compare(password, user.password);
    if (!verdict) {
      throw new ApiError({ status: 403, message: 'username or password incorrect' });
    }
    const token = jwt.sign({ username: user.userName, role: user.role, id: user._id }, JWT_SECRET, { expiresIn: '3h', algorithm: 'HS256' });
    const response = {
      status: 200,
      message: 'login success',
      data: {
        user: user.userName,
        token,
      },
    };
    res.json(response);
  } catch (error) {
    next(error);
  }
};
