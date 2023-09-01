// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center fixed top-25 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full max-w-7xl p-4">
        <div className="text-xl font-light text-white">Your Logo</div>
        <ul className="list-none flex gap-8 m-0 p-0">
          <li className="text-white cursor-pointer">About US</li>
          <li className="text-white cursor-pointer">Speakers</li>
          <li className="text-white cursor-pointer">Event Timeline</li>
          <li className="text-white cursor-pointer">WV Awards</li>
          <li className="text-white cursor-pointer">CSR</li>
          <li className="text-white cursor-pointer">Throwback</li>
          <li className="text-white cursor-pointer">Contact US</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
