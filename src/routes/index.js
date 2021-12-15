const { productsRouter } = require('../components/products/index');
const { cartRouter } = require('../components/shoppingCart/index');

const serverRouter = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  productsRouter(app);
  cartRouter(app);
};

exports.serverRouter = serverRouter;
