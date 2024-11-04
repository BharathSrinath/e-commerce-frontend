import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { products, customerDetails } = location.state || {};
  
  const isSuccess = Math.random() > 0.5;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{isSuccess ? 'Payment Successful!' : 'Payment Failed!'}</h1>
      {isSuccess ? (
        <div>
          <h2 className="text-xl">Thank you for your purchase!</h2>
          <h3 className="text-lg mt-4">Order Details:</h3>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                {product.title} - Quantity: {product.quantity}
              </li>
            ))}
          </ul>
          <h3 className="text-lg mt-4">Customer Details:</h3>
          <p>Name: {customerDetails.name}</p>
          <p>Email: {customerDetails.email}</p>
          <p>Address: {customerDetails.address}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl">We're sorry, but your payment could not be processed.</h2>
          <p>Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
