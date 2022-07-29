const { Joi, Segments } = require('celebrate');
const { BUYER, SELLER } = require('../constants');

module.exports = {
  register: {
    [Segments.BODY]: {
      userName: Joi.string().required(),
      password: Joi.string().required(),
      role: Joi.string().valid(BUYER, SELLER),
    },
  },
  login: {
    [Segments.BODY]: {
      userName: Joi.string().required(),
      password: Joi.string().required(),
    },
  },
};
