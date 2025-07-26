// pages/lodge.tsx (Lodge Details Page)
import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

// The Lodge page provides details about the accommodation.
const Lodge: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>Lodge Accommodations - RK Lodge & Restaurant</title>
                <meta name="description" content="Discover comfortable and well-appointed rooms at Hotel D'Lodge in Malkapur. Enjoy modern amenities and a peaceful stay." />
            </Head>

            <section className="bg-white rounded-lg shadow-xl p-6 md-p-10">
                <h1 className="text-4xl font-bold text-darkblue mb-6 text-center">Our Comfortable Lodge</h1>
                <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
                    At Hotel D'Lodge, we prioritize your comfort and relaxation. Our rooms are designed to provide a peaceful retreat after a day of travel or exploration, equipped with all the essential amenities to ensure a pleasant stay.
                </p>

                {/* Room Types Section */}
                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8 mb-12">
                    {/* Deluxe Room */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md hover-shadow-lg transition-shadow duration-300">
                        <img
                            src="https://placehold.co/400x250/4CAF50/FFFFFF?text=Deluxe+Room"
                            alt="Deluxe Room"
                            className="rounded-md mb-4 w-full h-auto object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x250/4CAF50/FFFFFF?text=Image+Not+Found"; }}
                        />
                        <h3 className="text-2xl font-semibold text-darkblue mb-3">Deluxe Room</h3>
                        <p className="text-gray-700 mb-4">
                            Spacious and elegantly furnished, our Deluxe Rooms offer a comfortable king-size bed, a private bathroom, and a cozy seating area.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex-row items-center">🛌 King-size Bed</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">❄️ Air Conditioning</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">📺 Flat-screen TV</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">📶 Free Wi-Fi</li> {/* Placeholder icon */}
                        </ul>
                    </div>

                    {/* Executive Room */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md hover-shadow-lg transition-shadow duration-300">
                        <img
                            src="https://placehold.co/400x250/FFC107/2C3E50?text=Executive+Room"
                            alt="Executive Room"
                            className="rounded-md mb-4 w-full h-auto object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x250/FFC107/2C3E50?text=Image+Not+Found"; }}
                        />
                        <h3 className="text-2xl font-semibold text-darkblue mb-3">Executive Room</h3>
                        <p className="text-gray-700 mb-4">
                            Designed for business travelers, Executive Rooms include a dedicated workspace and enhanced amenities for a productive stay.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex-row items-center">🛏️ Queen-size Bed</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">❄️ Air Conditioning</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">📺 Flat-screen TV</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">⚡ High-speed Wi-Fi</li> {/* Placeholder icon */}
                        </ul>
                    </div>

                    {/* Family Suite */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md hover-shadow-lg transition-shadow duration-300">
                        <img
                            src="https://placehold.co/400x250/2C3E50/FFFFFF?text=Family+Suite"
                            alt="Family Suite"
                            className="rounded-md mb-4 w-full h-auto object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x250/2C3E50/FFFFFF?text=Image+Not+Found"; }}
                        />
                        <h3 className="text-2xl font-semibold text-darkblue mb-3">Family Suite</h3>
                        <p className="text-gray-700 mb-4">
                            Our Family Suites offer ample space with multiple beds, perfect for families traveling together.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex-row items-center">👨‍👩‍👧‍👦 Multiple Beds</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">❄️ Air Conditioning</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">📺 Two Flat-screen TVs</li> {/* Placeholder icon */}
                            <li className="flex-row items-center">📶 Free Wi-Fi</li> {/* Placeholder icon */}
                        </ul>
                    </div>
                </div>

                {/* General Amenities */}
                <h2 className="text-3xl font-bold text-darkblue mb-6 text-center">General Amenities</h2>
                <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-6 text-center">
                    <div className="flex-col items-center p-4 bg-gray-100 rounded-md shadow-sm">
                        <span className="text-primary text-4xl mb-2">📶</span> {/* Placeholder icon */}
                        <p className="font-semibold text-darkblue">Free High-Speed Wi-Fi</p>
                    </div>
                    <div className="flex-col items-center p-4 bg-gray-100 rounded-md shadow-sm">
                        <span className="text-primary text-4xl mb-2">🚗</span> {/* Placeholder icon */}
                        <p className="font-semibold text-darkblue">Ample Parking</p>
                    </div>
                    <div className="flex-col items-center p-4 bg-gray-100 rounded-md shadow-sm">
                        <span className="text-primary text-4xl mb-2">☕</span> {/* Placeholder icon */}
                        <p className="font-semibold text-darkblue">Room Service</p>
                    </div>
                    <div className="flex-col items-center p-4 bg-gray-100 rounded-md shadow-sm">
                        <span className="text-primary text-4xl mb-2">📺</span> {/* Placeholder icon */}
                        <p className="font-semibold text-darkblue">Cable TV</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Lodge;
