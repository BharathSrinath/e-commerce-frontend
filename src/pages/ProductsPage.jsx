import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../store/slices/productsSlice';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  console.log(products[0]);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {category ? `${category} Products` : 'All Products'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg cursor-pointer"
            onClick={() => handleProductClick(product._id)}
          >
            <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-900 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
