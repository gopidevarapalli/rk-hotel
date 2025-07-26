// pages/index.tsx (Home Page)
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head'; // For setting page title and meta descriptions

// The Home page introduces the hotel and restaurant.
const Home: React.FC = () => {
    return (
        <Layout>
            {/* Head component for SEO and browser tab title */}
            <Head>
                <title>RK Lodge & Restaurant - Comfort & Cuisine in Malkapur</title>
                <meta name="description" content="Experience comfort and authentic local flavors at RK Lodge & Restaurant in Malkapur. Perfect for travelers and food lovers." />
            </Head>

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[500px] md-h-[600px] rounded-lg shadow-xl flex-row items-center justify-center text-center p-4"
                style={{ backgroundImage: "url('https://placehold.co/1200x600/4CAF50/FFFFFF?text=Welcome+to+Hotel+D%27Lodge')" }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md-text-6xl font-extrabold mb-4 drop-shadow-lg">
                        Welcome to RK Lodge & Restaurant
                    </h1>
                    <p className="text-lg md-text-2xl mb-8 font-light">
                        Your perfect destination for comfort and authentic flavors in Malkapur.
                    </p>
                    <div className="flex-col sm-flex-row justify-center gap-4">
                        <Link href="/lodge" className="bg-primary hover-bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover-scale-105">
                            Explore Lodge
                        </Link>
                        <Link href="/restaurant" className="bg-secondary hover-bg-yellow-600 text-darkblue font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover-scale-105">
                            Dine with Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 text-center">
                <h2 className="text-4xl font-bold text-darkblue mb-6">About Us</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Nestled conveniently near the Malkapur Bus Stand, RK Lodge & Restaurant offers a warm and inviting experience for every traveler. Whether you're seeking a comfortable stay in our well-appointed rooms or a culinary journey through local and multi-cuisine delights, we are dedicated to making your visit memorable.
                </p>
            </section>

            {/* Lodge Highlight */}
            <section className="py-16 bg-white rounded-lg shadow-md p-6 mb-8 flex-col md-flex-row items-center gap-8">
                <div className="md-w-1\/2">
                    <img
                        src="https://placehold.co/600x400/2C3E50/FFFFFF?text=Cozy+Lodge"
                        alt="Lodge Room"
                        className="rounded-lg shadow-lg w-full h-auto"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x400/2C3E50/FFFFFF?text=Image+Not+Found"; }}
                    />
                </div>
                <div className="md-w-1\/2 text-center md-text-left">
                    <h2 className="text-3xl font-bold text-darkblue mb-4">Comfortable Accommodations</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Our lodge provides a serene escape with spacious, clean, and comfortable rooms designed for your relaxation. Enjoy modern amenities, friendly service, and a peaceful atmosphere that makes you feel right at home. Perfect for business travelers, families, and tourists exploring Malkapur.
                    </p>
                    <Link href="/lodge" className="inline-block bg-primary hover-bg-primary-dark text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                        View Rooms
                    </Link>
                </div>
            </section>

            {/* Restaurant Highlight */}
            <section className="py-16 bg-white rounded-lg shadow-md p-6 flex-col md-flex-row-reverse items-center gap-8">
                <div className="md-w-1\/2">
                    <img
                        src="https://placehold.co/600x400/FFC107/2C3E50?text=Delicious+Food"
                        alt="Restaurant Dining"
                        className="rounded-lg shadow-lg w-full h-auto"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x400/FFC107/2C3E50?text=Image+Not+Found"; }}
                    />
                </div>
                <div className="md-w-1\/2 text-center md-text-right">
                    <h2 className="text-3xl font-bold text-darkblue mb-4">Delightful Dining Experience</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Savor the rich flavors at our in-house restaurant, offering a diverse menu of local specialties and popular multi-cuisine dishes. Our chefs use fresh ingredients to prepare delicious meals for breakfast, lunch, and dinner, ensuring a delightful culinary journey for every palate.
                    </p>
                    <Link href="/restaurant" className="inline-block bg-secondary hover-bg-yellow-600 text-darkblue font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                        See Menu
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
