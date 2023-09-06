import React from 'react';

const Gifts = () => {
    return (
        <div className="bg-gray-100 p-4">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-5xl font-bold text-left italic">Gifts from the Heart</h1>
                <p className="text-xl text-left my-4">
                    Gifts, especially in Indian weddings, hold immense significance.
                    With "101 Weddings With Hope," every gift symbolizes collective love and support for those daring to find love again.
                </p>
                <h2 className="text-3xl text-center my-4 font-bold relative top-6">Featured Gifts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative top-8">
                    {/* Repeat this container for each featured gift */}
                    <div className="bg-gray-100 p-4 ">
                        <div className="relative" style={{ paddingBottom: "100%" }}>
                            <img src="Gift1.png" alt="Gift 1" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold my-2 text-center">Bridal & Groom Attire:</h3>
                        <p className="text-gray-700 text-center">Elegantly crafted outfits that blend
                            tradition and contemporary styles,
                            ensuring every couple looks and
                            feels their best on their special day.</p>
                    </div>
                    {/* Repeat this container for each featured gift */}
                    <div className="bg-gray-100 p-4 ">
                        <div className="relative" style={{ paddingBottom: "100%" }}>
                            <img src="Gift2.png" alt="Gift 2" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold my-2 text-center">2gm Gold Mangal Sutra:</h3>
                        <p className="text-gray-700 text-center"> More than just jewelry, the Mangal
                            Sutra is an emblem of marital
                            commitment, promising eternal
                            togetherness.
                        </p>
                    </div>
                    {/* Repeat this container for each featured gift */}
                    <div className="bg-gray-100 p-4 ">
                        <div className="relative" style={{ paddingBottom: "100%" }}>
                            <img src="Gift3.png" alt="Gift 3" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold my-2 text-center">Kitchen Appliances:</h3>
                        <p className="text-gray-700 text-center">There is enough space here for an
                            in-depth description of your team.
                            Establish their credibility and
                            expertise here. There is enough
                            space here for an in-depth
                            description of your team. Establish
                            their credibility and expertise here.</p>
                    </div>
                    {/* Repeat this container for each featured gift */}
                    <div className="bg-gray-100 p-4 ">
                        <div className="relative" style={{ paddingBottom: "100%" }}>
                            <img src="Gift4.png" alt="Gift 4" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold my-2 text-center">Groceries:</h3>
                        <p className="text-gray-700 text-center">Starting their journey with essentials
                            to ensure a nourished life together.
                        </p>
                    </div>
                    {/* Repeat this container for each featured gift */}
                    <div className="bg-gray-100 p-4 ">
                        <div className="relative" style={{ paddingBottom: "100%" }}>
                            <img src="Gift5.png" alt="Gift 5" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold my-2 text-center">25Kg Atta Bag:</h3>
                        <p className="text-gray-700 text-center">An indispensable staple,
                            symbolizing prosperity and
                            abundance.
                        </p>
                    </div>
                    {/* Repeat this container for each featured gift */}
                    <div className="bg-gray-100 p-4 ">
                        <div className="relative" style={{ paddingBottom: "100%" }}>
                            <img src="Gift6.png" alt="Gift 6" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold my-2 text-center">And Many More:</h3>
                        <p className="text-gray-700 text-center">Every gift, big or small, carries with it
                            a wish, a prayer, a hope. From
                            everyday utilities to special
                            keepsakes, our generous donors
                            ensure the couples are enveloped in
                            care and warmth.</p>
                    </div>
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
