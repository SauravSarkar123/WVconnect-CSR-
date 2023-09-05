import React from 'react';

const Mission = () => {
    return (
        <div className="bg-gray-100"> {/* Use a background color or styling for the container */}
            <div className="container mx-auto p-6 text-center">
                <div className="my-content-class"> {/* Add a div wrapper with a custom class */}
                    <h1 className="text-3xl font-semibold italic">Our mission</h1>
                    <p className="font-bold text-2xl mt-4 italic">Nurturing Hope, Love and New Beginnings</p>
                    <p className="mt-4">
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
                            <p className="text-sm">Creating a joyful, hopeful, and collective celebration space.</p>
                        </div>
                    </div>
                    <div className="mt-8 font-bold relative top-4">
                        <p>
                            The world's recent challenges have amplified loneliness and loss.
                        </p>
                        <p>
                            Our initiative serves as a solace, a flame of hope.
                        </p>
                    </div>
                </div>
                <div className='relative top-11'>
                    <h2 className="text-3xl font-bold text-center mb-4">Why Now? The Imperative</h2>
                    <p className="text-lg text-left mb-8">
                        In recent years, the world has witnessed unprecedented challenges, leaving
                        many grappling with loss and solitude. "101 Weddings With Hope" was
                        conceived as a balm for these souls, a chance to reignite hope in their
                        hearts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
