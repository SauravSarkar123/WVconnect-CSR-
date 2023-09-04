import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-opacity-30 text-white relative overflow-hidden">
      {/* Container for the blurred background image */}
      <div className={`absolute inset-0 ${styles.blur}`}>
        <div
          className={`absolute inset-0 bg-cover bg-center ${styles.hero}`} style={{ outline: 'none' }}
        />
      </div>
      <div className="text-center relative">
        <h1 className="text-xl md:text-5xl lg:text-5xl mb-4 text-grey">WEDDINGS WITH HOPE</h1>
        <p className="text-lg md:text-xl lg:text-2xl">with WConnect</p>
        <button className="py-3 px-8 mt-4 md:mt-8 bg-red-500 text-white rounded-md hover:bg-red-600 transform transition-all duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
