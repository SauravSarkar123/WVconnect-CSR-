import React from 'react';

const JoinUs = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      {/* Left Half - Image */}
      <div className="w-1/2 max-h-screen">
        {/* You can add your image here */}
        <img src="Donate.png" alt="Image" className="w-full h-full object-cover" />
      </div>

      {/* Right Half - Content */}
      <div className="w-1/2 p-6 bg-gray-100">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic ">Join Us & Contribute</h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg">
          Become part of this transformation. By joining us, you play a pivotal role in shaping lives and spreading joy.
          Together, we aim for a world filled with warmth and love.
        </p>
        <div className="flex justify-center items-center mt-4">
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 focus:outline-none">
          Donate Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
