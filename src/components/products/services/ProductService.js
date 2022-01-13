const ProductModel = require('../../../models/ProductModel');
const { db: firebaseDB } = require('../../../utils/firebase/index');

class ProductService {
  async getAllProducts() {
    try {
      let values;
      const response = await firebaseDB.get();
      response.forEach((product) => {
        values = {
          id: product.id,
          ...product.data(),
        };
      });
      return { success: true, data: values };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  getProductById(id) {
    try {
      const response = ProductModel.find((product) => product.id === id);
      console.log(response);
      return { success: true, data: response };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  deleteProductById(id) {
    try {
      const index = ProductModel.findIndex((product) => product.id === id);
      const response = ProductModel.splice(index, 1);
      return { success: true, data: { productDeleted: response } };
    } catch (err) {
      return { success: false, data: err };
    }
  }

  createProduct(product) {
    try {
      if (product.isAdmin) {
        firebaseDB.collection('products').add(product);
        return {
          success: true,
          data: { productCreated: product },
        };
      }
      return { success: false, data: 'Hi' };
    } catch (err) {
      return { success: false, err };
    }
  }

  updateProduct(id, product) {
    try {
      const response = firebaseDB.doc(id).update({ name: product.name });
      return { success: true, data: { productUpdatedAtIndex: response } };
    } catch (err) {
      return { success: false, data: err };
    }
  }
}

module.exports = new ProductService();
