import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-6 md:py-12 bg-gray-100 px-4 md:px-12">
      <div className="container mx-auto rounded-lg overflow-hidden p-6 bg-white shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1 p-6 md:p-10 mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-2 md:mb-4 text-gray-800 mt-2">
              ABOUT WEDDING WITH HOPE
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Renewing Bonds Igniting Hearts
            </p>
            <h3 className="text-xl md:text-2xl font-bold mt-2 text-gray-800">
              WV CONNECT 2024
            </h3>
            <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
              In the spirit of unity and renewal, "Wedding With Hope" emerges as an unprecedented initiative. This noble endeavor marries 101 couples, giving them a second chance at love—an event of unprecedented significance in our nation's legacy. Amidst the grandeur of a royal Jaipur destination wedding, fireworks, drone shows, and celebratory fervor, we promise an unforgettable experience.
            </p>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold text-black mt-8 md:mt-12 mb-4 md:mb-8">Essence of Presence</h2>
              <div className="md:flex md:justify-center">
                <div className="relative p-4 overflow-hidden hover:scale-105 transition-transform">
                  <img
                    src="/1st_one.png"
                    width={250}
                    height={300}
                    alt="Image 1"
                    className="mx-auto"
                  />
                  <div className="absolute inset-0 opacity-60 hover:opacity-0 transition-opacity"></div>
                </div>
                <div className="relative p-4 overflow-hidden hover:scale-105 transition-transform">
                  <img
                    src="/2nd One.png"
                    width={250}
                    height={300}
                    alt="Image 2"
                    className="mx-auto"
                  />
                  <div className="absolute inset-0 opacity-60 hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 p-6 bg-cover bg-center h-80 md:h-auto relative">
            <Image
              src="/About Image.jpg" // Update the path accordingly
              alt="Wedding With Hope"
              width={330}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
