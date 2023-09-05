import React from "react";

const EventDetails = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="text-left text-5xl font-bold italic">101 Weddings With Hope</div>
            <div className="text-left text-5xl mt-2 font-bold text-yellow-500">Venue Details</div>
            <div className="text-left text-lg mt-4">
                <b> Date: </b> April 6th, 2024 | <b>Time: </b> 9:00 AM | <b>Venue:</b> Ananta Spa & Resort, Jaipur, Rajasthan
            </div>
            <div className="mt-8">
                <div className="text-4xl font-bold text-center">The Grandeur Awaits</div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <img src="/1stGrand.png" alt="Image 1" className="w-full" />
                        <div className="text-lg font-semibold mt-2">Historic Unions</div>
                        <p className="text-sm mt-2 italic">
                            Celebrate the journey of 101 couples, each with
                            their own tale of resilience, as they come
                            together in matrimony.

                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <img src="/2ndGrand.png" alt="Image 2" className="w-full" />
                        <div className="text-lg font-semibold mt-2">Media Spotlight </div>
                        <p className="text-sm mt-2 italic">
                            WV Connect 2024's initiative is bound to capture
                            hearts across the nation. With pan-India coverage,
                            expect features in top newspapers, magazines,
                            television broadcasts, radio, YouTube, and
                            numerous social forums

                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <img src="/3rdGrand.png" alt="Image 3" className="w-full" />
                        <div className="text-lg font-semibold mt-2">Royal Destination</div>
                        <p className="text-sm mt-2 italic">
                            Experience the magic of a traditional Indian
                            wedding set against the backdrop of Jaipur's regal
                            architecture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
