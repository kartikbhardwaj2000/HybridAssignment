module.exports = {
    PORT: process.env.PORT||8000,
    MONGO_URI:process.env.MONGO_URI||'mongodb://localhost:27017/ecommerceDB',
    JWT_SECRET:process.env.JWT_SECRET||'ksdfkk98302934kjkkjnadsf',
    SELLER:'SELLER',
    BUYER:'BUYER',
    RUPEE:'RUPEE'
}