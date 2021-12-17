const { Router } = require('express');
const ShoppingCartController = require('./controller/ShoppingCartController');
const authAdmin = require('../../middlewares/authMiddleware');

const router = new Router();
const cartRouter = async (app) => {
  app.use('/cart', router);
  app.get('/cart', (req, res) => {
    res.json(ShoppingCartController.getAllCarts());
  });
  // Get all products.
  app.get('/carts', (req, res) => {
    res.json(ShoppingCartController.getAllCarts());
  });

  // Get product by id.
  app.get('/carts/:id', authAdmin, (req, res) => {
    res.json(ShoppingCartController.getProductById(Number(req.params.id)));
  });

  // Delete product by id.
  app.delete('/product/:id', authAdmin, (req, res) => {
    res.json(ShoppingCartController.deleteProductById(Number(req.params.id)));
  });

  // Create product.
  app.post('/product', authAdmin, (req, res) => {
    res.json(ShoppingCartController.createProduct(req.body));
  });

  // Update product.
  app.put('/product/:id', authAdmin, (req, res) => {
    res.json(
      ShoppingCartController.updateProduct(Number(req.params.id), req.body)
    );
  });
};
exports.cartRouter = cartRouter;
