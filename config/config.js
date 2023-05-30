const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development', 
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000,
    PASSWORD : process.env.PASSWORD || 'emilio1512',
    USER : process.env.USER || 'root',
    DATABASE: process.env.DATABASE || 'loginsystem'
}
