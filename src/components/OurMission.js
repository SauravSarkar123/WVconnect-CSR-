import React from 'react';

const Mission = () => {
    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-semibold text-left italic">Our mission</h1>
            <p className="font-bold text-2xl mt-4 text-left italic">Nurturing Hope, Love and New Beginnings</p>
            <p className="mt-4 text-left">
                Life's challenges are many, but "101 wedding with hope" lights the way for those navigating life's tumults
            </p>
            <div className="mt-8 flex justify-center space-x-8">
                <div className="max-w-xs">
                    <img src="/Fostering .png" alt="Image 1" className="w-full h-auto" />
                    <p className="font-bold text-lg mt-2">Fostering Companionship</p>
                    <p className="text-sm">Guiding individuals towards rediscovering love.</p>
                </div>
                <div className="max-w-xs">
                    <img src="/growth.png" alt="Image 2" className="w-full h-auto" />
                    <p className="font-bold text-lg mt-2">Celebrating Resilience</p>
                    <p className="text-sm">Applauding souls stepping into new life chapters.</p>
                </div>
                <div className="max-w-xs">
                    <img src="/Companion.png" alt="Image 3" className="w-full h-auto" />
                    <p className="font-bold text-lg mt-2">Radiating Positivity</p>
                    <p className="text-sm">Creating a joyful, hopeful, and collective celebration
                        space.</p>
                </div>
            </div>
            <p className="mt-8 font-bold relative top-4">
  The world's recent challenges have amplified loneliness and loss.<br />
  Our initiative serves as a solace, a flame of hope.
</p>

        </div>
    );
};

export default Mission;
