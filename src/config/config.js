// Configuration file for enviroment variables.
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  port: process.env.PORT,
};