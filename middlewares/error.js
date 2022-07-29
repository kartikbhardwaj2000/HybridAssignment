const { isCelebrateError } = require('celebrate');
const ApiError = require('../utils/error');

exports.validationError = (err, req, res, next) => {
  if (!isCelebrateError(err)) {
    return next(err);
  }
  const error = new ApiError({
    message: 'Validation Error',
    errors: err.errors,
    status: 400,
  });

  return handler(error, req, res);
};
exports.converter = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return handler(err, req, res, next);
  }

  const apiError = new ApiError({
    status: 500,
    message: err.message || 'Internal Server error',
  });
  return handler(apiError, req, res, next);
};

const handler = (err, req, res, next) => {
  const response = {
    status: err.status,
    message: err.message,
    errors: err.errors,
  };

  return res.status(response.status).json(response);
};
exports.notFoundHandler = (req, res) => {
  const response = {
    status: 404,
    message: 'not found',
  };
  res.status(404).json(response);
};
