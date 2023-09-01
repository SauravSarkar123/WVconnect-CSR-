import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto rounded-lg overflow-hidden bg-white shadow-lg">
        <div className="flex flex-col md:flex-row">
        <div className="md:flex-1 p-6 md:p-10 mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              ABOUT WEDDING WITH HOPE
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Renewing Bonds Igniting Hearts
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mt-6 text-gray-800">
              WV CONNECT 2024
            </h3>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              In the spirit of unity and renewal, "Wedding With Hope" emerges as an unprecedented initiative. This noble endeavor marries 101 couples, giving them a second chance at love—an event of unprecedented significance in our nation's legacy. Amidst the grandeur of a royal Jaipur destination wedding, fireworks, drone shows, and celebratory fervor, we promise an unforgettable experience.
            </p>
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
