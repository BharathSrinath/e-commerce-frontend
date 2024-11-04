import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: `men's clothing`, src: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { name: `jewelery`, src: 'https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxlcnl8ZW58MHx8MHx8fDA%3D' },
  { name: `electronics`, src: 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D' },
  { name: `women's clothing`, src: 'https://images.unsplash.com/photo-1588175996685-a40693ee1087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { name: `men's clothing`, src: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww' },
  { name: `jewelery`, src: 'https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxlcnl8ZW58MHx8MHx8fDA%3D' },
  { name: `electronics`, src: 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D' },
  { name: `women's clothing`, src: 'https://images.unsplash.com/photo-1588175996685-a40693ee1087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww' },
];

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link 
            to={`/products?category=${category.name}`}
            key={index}
            className="border p-4 rounded-lg text-center"
          >
            <img src={category.src} alt={category.name} className="w-full h-32 object-cover mb-2" />
            <span className="text-lg font-semibold">{category.name}</span>
          </Link>
        ))}
        <Link to="/products" className="border p-4 rounded-lg text-center">
          <span className="text-lg font-semibold">All Categories</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
