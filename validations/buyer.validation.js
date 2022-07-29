const { Joi, Segments } = require('celebrate');

module.exports = {
  sellerCatalog: {
    [Segments.PARAMS]: {
      seller_id: Joi.string().length(24),
    },
  },
  createOrder: {
    [Segments.PARAMS]: {
      seller_id: Joi.string().length(24),
    },
    [Segments.BODY]: {
      items: Joi.array().items(Joi.string().length(24)).required().min(1),
    },
  },

};
