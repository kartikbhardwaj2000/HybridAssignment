const { Joi, Segments } = require('celebrate');

module.exports = {
  createCatalog: {
    [Segments.BODY]: {
      catalog: Joi.array().items(Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.number().required().min(0),
      })).min(1).required(),
    },
  },
};
