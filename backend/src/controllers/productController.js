import { products } from '../data/products.js';

// Get all products
export const getProducts = (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
};

// Get single product
export const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  res.json({
    success: true,
    data: product
  });
};
