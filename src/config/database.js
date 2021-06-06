require('dotenv/config');

module.exports={
    dialect: 'mysql',
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamp:true,
        underscored:true,
    }


}