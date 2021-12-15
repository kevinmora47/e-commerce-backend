const cors = require('cors');

const initProductMiddlewares = (app, express) => {
  app.use(cors('*'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = initProductMiddlewares;
