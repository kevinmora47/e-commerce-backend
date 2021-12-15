const { Router } = require('express');
const ShoppingCartController = require('./controller/ShoppingCartController');

const router = new Router();
const cartRouter = async (app) => {
  app.use('/cart', router);
  app.get('/cart', (req, res) => {
    res.json(ShoppingCartController.getAllProducts());
  });
};
exports.cartRouter = cartRouter;
