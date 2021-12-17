const shoppingCart = require('../../../models/ShoppingCartModel');

class ShoppingCartService {
  getAllCarts() {
    try {
      const response = shoppingCart;
      return { success: true, data: response };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  getCartById(id) {
    try {
      const response = shoppingCart.find((cart) => cart.sessionId === id);
      console.log(response);
      return { success: true, data: response };
    } catch (err) {
      console.log(err);
      return { success: false, data: err };
    }
  }

  deleteCartById(id) {
    try {
      const index = shoppingCart.findIndex((cart) => cart.sessionId === id);
      const response = shoppingCart.splice(index, 1);
      return { success: true, data: { productDeleted: response } };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  createCart(cart) {
    try {
      const response = shoppingCart.push(cart);
      return {
        success: true,
        data: { productCreated: cart },
        response,
      };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  updateCart(id, product) {
    try {
      const index = shoppingCart.findIndex(
        (productFound) => productFound.sessionId === id
      );
      const response = shoppingCart.splice(index, 1, product);
      return { success: true, data: { productUpdatedAtIndex: response } };
    } catch (err) {
      return { success: false, data: err };
    }
  }
}

module.exports = new ShoppingCartService();
