import React from 'react';

const EssenceOfPresence = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Essence of Presence</h2>
        <div className="flex justify-center">
          <div className="w-1/2 relative overflow-hidden hover:scale-105 transition-transform">
            <img src="/1st_one.png" alt="Image 1" className="mx-auto" />
          </div>
          <div className="w-1/2 relative overflow-hidden hover:scale-105 transition-transform">
            <img src="/2nd One.png" alt="Image 2" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssenceOfPresence;
