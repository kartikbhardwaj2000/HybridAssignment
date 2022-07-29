const jwt = require('jsonwebtoken');

const {jwtSecret} = require('../constants');
const { use } = require('../routes');
const ApiError = require('../utils/error');

module.exports = (authRole) => {
    return async (req,res,next) => {
        try {
            const token = req.headers['authorization'].split(' ')[1];
            const decodedData = await jwt.verify(token,jwtSecret);
            if(decodedData.role!==authRole)
            {
                throw new ApiError({status:401, message:'unauthorised'});
            }
            req.user = decodedData;
            next();
        } catch (error) {
            if(error instanceof jwt.JsonWebTokenError)
            {
                next(new ApiError({status:403, message:'unauthenticated'}));
            }
            next(error)
        }

    }
}