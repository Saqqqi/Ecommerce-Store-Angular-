const products = require('./products.json');

const Product = {
  findAll: () => products,
  findById: (id) => products.find(product => product.id === id)
};

module.exports = Product;
