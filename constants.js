module.exports = {
    port: process.env.PORT||8000,
    mongoUri:process.env.MONGO_URI||'mongodb://localhost:27017/ecommerceDB',
}