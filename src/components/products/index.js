const { Router } = require('express');
const ProductController = require('./controller/ProductController');
const authAdmin = require('../../middlewares/authMiddleware');

const router = new Router();
const productsRouter = async (app) => {
  // Products Router.
  app.use('/products', router);

  // Get all products.
  app.get('/products', (req, res) => {
    res.json(ProductController.getAllProducts());
  });

  // Get product by id.
  app.get('/products/:id', authAdmin, (req, res) => {
    res.json(ProductController.getProductById(Number(req.params.id)));
  });

  // Delete product by id.
  app.delete('/product/:id', authAdmin, (req, res) => {
    res.json(ProductController.deleteProductById(Number(req.params.id)));
  });

  // Create product.
  app.post('/product', authAdmin, (req, res) => {
    res.json(ProductController.createProduct(req.body));
  });

  // Update product.
  app.put('/product/:id', authAdmin, (req, res) => {
    res.json(ProductController.updateProduct(Number(req.params.id), req.body));
  });
};
exports.productsRouter = productsRouter;
