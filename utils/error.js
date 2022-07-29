class ApiError extends Error{
    constructor({status,message,errors})
    {
        super(message);
        this.status = status;
    }
}

module.exports = ApiError;