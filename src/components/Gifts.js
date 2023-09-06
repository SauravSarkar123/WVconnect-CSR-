import React from 'react';

const Gifts = () => {
  return (
    <div className="bg-gray-100 py-4 md:py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-left italic">Gifts from the Heart</h1>
        <p className="text-base md:text-xl text-left my-4">
          Gifts, especially in Indian weddings, hold immense significance. With "101 Weddings With Hope," every gift symbolizes collective love and support for those daring to find love again.
        </p>
        <h2 className="text-2xl md:text-3xl text-center my-4 font-bold relative top-6">Featured Gifts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative top-8">
          {/* Repeat this container for each featured gift */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 md:p-6"
            >
              <div className="relative" style={{ paddingBottom: '100%' }}>
                <img
                  src={`Gift${index + 1}.png`}
                  alt={`Gift ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold my-2 text-center">Gift Name</h3>
              <p className="text-gray-700 text-center text-base md:text-sm max-h-20 overflow-hidden overflow-ellipsis italic">
                Gift description goes here. You can customize this for each gift.
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 relative top-0">
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Donate now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
