const ProductService = require('../services/ProductService');

class ProductController {
  getAllProducts() {
    try {
      return ProductService.getAllProducts();
    } catch (err) {
      return { success: false, data: err };
    }
  }

  getProductById(id) {
    try {
      return ProductService.getProductById(id);
    } catch (err) {
      return { success: false, data: err };
    }
  }

  deleteProductById(id) {
    try {
      return ProductService.deleteProductById(id);
    } catch (err) {
      return { success: false, data: err };
    }
  }

  createProduct(product) {
    try {
      return ProductService.createProduct(product);
    } catch (err) {
      return { success: false, data: err };
    }
  }

  updateProduct(id, product) {
    try {
      return ProductService.updateProduct(id, product);
    } catch (err) {
      return { success: false, data: err };
    }
  }
}

module.exports = new ProductController();
