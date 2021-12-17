const ShoppingCartService = require('../services/shoppingCartService');

class ShoppingCartController {
  getAllCarts() {
    try {
      return ShoppingCartService.getAllCarts();
    } catch (err) {
      return { success: false, data: err };
    }
  }

  getProductById(id) {
    try {
      return ShoppingCartService.getCartById(id);
    } catch (err) {
      return { success: false, data: err };
    }
  }

  deleteProductById(id) {
    try {
      return ShoppingCartService.deleteCartById(id);
    } catch (err) {
      return { success: false, data: err };
    }
  }

  createProduct(product) {
    try {
      return ShoppingCartService.createCart(product);
    } catch (err) {
      return { success: false, data: err };
    }
  }

  updateProduct(id, product) {
    try {
      return ShoppingCartService.updateCart(id, product);
    } catch (err) {
      return { success: false, data: err };
    }
  }
}

module.exports = new ShoppingCartController();
