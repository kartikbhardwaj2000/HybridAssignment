class ApiError extends Error{
    constructor({status,message,errors})
    {
        super(message);
        this.status = status;
    }
}

try {
    throw new ApiError({status:404,message:'Whoops!'})
  } catch (e) {
    console.error(e.name + ': ' + e.message+ e.statusCode)
  }

module.exports = ApiError;