import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`${
        scrolling
          ? 'bg-black bg-opacity-60'
          : 'bg-transparent'
      } fixed top-0 left-0 w-full z-50 transition-all ease-in-out duration-300`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex-shrink-0">
            <div className="text-2xl md:text-3xl font-semibold text-white">Your Logo</div>
          </div>
          <div className="hidden md:flex space-x-4 md:space-x-12">
            <a href="#" className="text-lg md:text-2xl font-regular text-white hover:text-gray-300">About US</a>
            <a href="#" className="text-lg md:text-2xl font-regular text-white hover:text-gray-300">Speakers</a>
            <a href="#" className="text-lg md:text-2xl font-regular text-white hover:text-gray-300">Event Timeline</a>
            <a href="#" className="text-lg md:text-2xl font-regular text-white hover:text-gray-300">WV Awards</a>
            <a href="#" className="text-lg md:text-2xl font-regular text-white hover:text-gray-300">CSR</a>
            <a href="#" className="text-lg md:text-2xl font-regular text-white hover:text-gray-300">Throwback</a>
            <a href="#" className="text-lg md:text-2xl font-regular text-white hover:text-gray-300">Contact US</a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="text-lg font-medium text-white focus:outline-none"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-black bg-opacity-90 absolute top-0 left-0 w-64 h-screen flex flex-col justify-start p-4 space-y-4">
            <li className="text-white text-lg cursor-pointer">About US</li>
            <li className="text-white text-lg cursor-pointer">Speakers</li>
            <li className="text-white text-lg cursor-pointer">Event Timeline</li>
            <li className="text-white text-lg cursor-pointer">WV Awards</li>
            <li className="text-white text-lg cursor-pointer">CSR</li>
            <li className="text-white text-lg cursor-pointer">Throwback</li>
            <li className="text-white text-lg cursor-pointer">Contact US</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
