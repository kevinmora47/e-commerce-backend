const ShoppingCart = require('../../../models/ShoppingCartModel');

class ProductController {
  getAllProducts() {
    try {
      const response = ShoppingCart;
      return { success: true, data: response };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  getProductById(id) {
    try {
      const response = ShoppingCart.find((product) => product.id === id);
      console.log(response);
      return { success: true, data: response };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  deleteProductById(id) {
    try {
      const index = ShoppingCart.findIndex((product) => product.id === id);
      const response = ShoppingCart.splice(index, 1);
      return { success: true, data: { productDeleted: response } };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  createProduct(product) {
    try {
      const response = ShoppingCart.push(product);
      return { success: true, data: { productCreated: product } };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  updateProduct(id, product) {
    try {
      const index = ShoppingCart.findIndex(
        (productFound) => productFound.id === id
      );
      const response = ShoppingCart.splice(index, 1, product);
      return { success: true, data: { productUpdatedAtIndex: response } };
    } catch (err) {
      return { success: false, data: err };
    }
  }
}

module.exports = new ProductController();
