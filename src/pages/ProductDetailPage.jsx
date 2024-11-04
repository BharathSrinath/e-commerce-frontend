import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../store/slices/productsSlice';
import { updateCartQuantity } from '../store/slices/cartSlice';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const product = products.find((item) => item._id === id);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(updateCartQuantity({ ...product, quantity }));
  };

  if (!product) return <div>Sorry, Page not available!</div>;

  return (
    <div className="p-4 flex">
      <div className="w-1/2">
        <img src={product.images[0]} alt={product.title} className="w-full object-cover" />
      </div>
      <div className="w-1/2 pl-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-700 my-4">Rating: {product.rating} stars</p>
        <p className="text-gray-900 font-bold text-2xl mb-4">${product.price}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        
        <div className="flex items-center mb-4">
          <button onClick={handleDecrease} className="px-4 py-2 bg-gray-200 rounded-l">-</button>
          <span className="px-4 py-2 border">{quantity}</span>
          <button onClick={handleIncrease} className="px-4 py-2 bg-gray-200 rounded-r">+</button>
        </div>

        <button
          onClick={handleAddToCart}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
