module.exports ={
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://user:123123@cluster0.xqeby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    JWT_SECRET: process.env.JWT_SCRET || 'secret1'
}