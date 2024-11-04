import React from 'react';
import { Link } from 'react-router-dom';
import amazonLogo from '../assets/amazon-logo.svg';
import cartIcon from '../assets/cart-shopping-svgrepo-com.svg';
import searchIcon from '../assets/search-svgrepo-com.svg';

const Header = () => {
  return (
    <div className="bg-slate-900 text-white flex items-center w-full h-20 px-8">
      <Link to="/" className="flex justify-center items-center">
        <img
          src={amazonLogo} 
          alt="Amazon Logo"
          className="h-32 w-32"
        />
        <span className='font-bold text-3xl text-white mb-5 pl-1'>.in</span>
      </Link>

      <div className="flex w-full justify-center">
        <div className='flex w-1/2'>
          <input
            type="text"
            placeholder="Search"
            className="flex-grow p-2 h-10 rounded-l-md text-gray-900 border border-black border-r-0"
          />
          <img src={searchIcon} alt="search icon" className='h-10 w-10 border border-black border-l-0 rounded-r-md'/>
        </div>
      </div>

      <Link to="/cart" className="flex items-center">
        <img src={cartIcon} alt="cart icon" className='h-12 w-12'/>
        <span className="font-bold">Cart</span>
      </Link>
    </div>
  );
};

export default Header;
