import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    navigate('/payment', {
      state: {
        products: cartItems,
        customerDetails: shippingInfo,
      },
    });
  };

  return (
    <div className="p-4 w-2/3 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <ul className="border rounded-md">
          {cartItems.map((item) => (
            <li key={item._id} className="flex justify-between p-2 border-b">
              <span>{item.title} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold p-2">
          <span>Total Price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Shipping Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleChange}
              className="border rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleChange}
              className="border rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address:</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleChange}
              className="border rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">City:</label>
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleChange}
              className="border rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">State:</label>
            <input
              type="text"
              name="state"
              value={shippingInfo.state}
              onChange={handleChange}
              className="border rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Zip Code:</label>
            <input
              type="text"
              name="zipCode"
              value={shippingInfo.zipCode}
              onChange={handleChange}
              className="border rounded-md w-full p-2"
              required
            />
          </div>
        </form>
      </div>

      <button onClick={handlePlaceOrder} className="bg-blue-500 text-white py-2 px-4 rounded">
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
