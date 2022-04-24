// add env
require('dotenv').config();
module.exports = {
  HOST: process.env.HOSTPG,
  USER: process.env.USERPG,
  PASSWORD: process.env.PASSWORDPG,
  DB: process.env.DBPG,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};