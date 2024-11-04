import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 mt-auto">
      <div className="text-center">
        <span>&copy; {new Date().getFullYear()} Amazon, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
