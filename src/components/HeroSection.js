import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-opacity-30 text-white relative overflow-hidden">
      <div className="absolute outset-0" style={{ zIndex: -1 }}>
        <div
          className="absolute outset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: `url('/background6.jpg')`,
          }}
        />
      </div>
      <div className="text-center relative">
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4">WEDDINGS WITH HOPE</h1>
        <p className="text-lg md:text-xl lg:text-2xl">with WConnect</p>
        <button className="py-3 px-8 mt-4 md:mt-8 bg-red-500 text-white rounded-md hover:bg-red-600 transform transition-all duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
