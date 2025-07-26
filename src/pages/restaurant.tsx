// pages/restaurant.tsx (Restaurant Details Page)
import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

// The Restaurant page details the dining experience.
const Restaurant: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>Restaurant - RK Lodge & Restaurant</title>
                <meta name="description" content="Savor authentic local and multi-cuisine dishes at the restaurant of Hotel D'Lodge in Malkapur. Open for breakfast, lunch, and dinner." />
            </Head>

            <section className="bg-white rounded-lg shadow-xl p-6 md-p-10">
                <h1 className="text-4xl font-bold text-darkblue mb-6 text-center">Our Delightful Restaurant</h1>
                <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
                    Indulge in a culinary journey at RK Lodge & Restaurant. Our kitchen prides itself on preparing fresh, delicious meals that cater to diverse tastes, from authentic local specialties to popular multi-cuisine options.
                </p>

                {/* Dining Experience */}
                <div className="grid grid-cols-1 md-grid-cols-2 gap-8 items-center mb-12">
                    <div className="order-2 md-order-1 text-center md-text-left">
                        <h2 className="text-3xl font-bold text-darkblue mb-4">A Taste of Malkapur and Beyond</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Our menu features a delightful array of dishes, carefully crafted by our experienced chefs. We focus on using fresh, locally sourced ingredients whenever possible to bring you the true flavors of the region, alongside beloved international favorites.
                        </p>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex-row items-center justify-center md-justify-start">👨‍🍳 Experienced Chefs</li> {/* Placeholder icon */}
                            <li className="flex-row items-center justify-center md-justify-start">✨ Fresh, Quality Ingredients</li> {/* Placeholder icon */}
                            <li className="flex-row items-center justify-center md-justify-start">🍽️ Diverse Menu Selection</li> {/* Placeholder icon */}
                        </ul>
                    </div>
                    <div className="order-1 md-order-2">
                        <img
                            src="https://placehold.co/600x400/FFC107/2C3E50?text=Restaurant+Interior"
                            alt="Restaurant Interior"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x400/FFC107/2C3E50?text=Image+Not+Found"; }}
                        />
                    </div>
                </div>

                {/* Specialities Section */}
                <h2 className="text-3xl font-bold text-darkblue mb-6 text-center">Our Culinary Specialties</h2>
                <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-3 gap-8 mb-12">
                    {/* Local Thali */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md hover-shadow-lg transition-shadow duration-300 text-center">
                        <img
                            src="https://placehold.co/400x250/4CAF50/FFFFFF?text=Local+Thali"
                            alt="Local Thali"
                            className="rounded-md mb-4 w-full h-auto object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x250/4CAF50/FFFFFF?text=Image+Not+Found"; }}
                        />
                        <h3 className="text-2xl font-semibold text-darkblue mb-3">Authentic Local Thali</h3>
                        <p className="text-gray-700">
                            Experience the true taste of Maharashtra with our traditional Thali, a complete meal with regional delicacies.
                        </p>
                    </div>

                    {/* Indian Curries */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md hover-shadow-lg transition-shadow duration-300 text-center">
                        <img
                            src="https://placehold.co/400x250/2C3E50/FFFFFF?text=Indian+Curries"
                            alt="Indian Curries"
                            className="rounded-md mb-4 w-full h-auto object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x250/2C3E50/FFFFFF?text=Image+Not+Found"; }}
                        />
                        <h3 className="text-2xl font-semibold text-darkblue mb-3">Rich Indian Curries</h3>
                        <p className="text-gray-700">
                            From creamy Butter Chicken to spicy Paneer Masala, our Indian curries are a delight for every palate.
                        </p>
                    </div>

                    {/* Continental Delights */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md hover-shadow-lg transition-shadow duration-300 text-center">
                        <img
                            src="https://placehold.co/400x250/FFC107/2C3E50?text=Continental+Dishes"
                            alt="Continental Dishes"
                            className="rounded-md mb-4 w-full h-auto object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x250/FFC107/2C3E50?text=Image+Not+Found"; }}
                        />
                        <h3 className="text-2xl font-semibold text-darkblue mb-3">Continental Favorites</h3>
                        <p className="text-gray-700">
                            Enjoy a selection of popular Continental dishes, prepared with an international touch.
                        </p>
                    </div>
                </div>

                {/* Operating Hours */}
                <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-darkblue mb-4">Operating Hours</h2>
                    <div className="flex-row items-center justify-center text-xl text-gray-700 mb-2">
                        <span>⏰</span> {/* Placeholder icon */}
                        <span>Breakfast: 7:00 AM - 10:00 AM</span>
                    </div>
                    <div className="flex-row items-center justify-center text-xl text-gray-700 mb-2">
                        <span>⏰</span> {/* Placeholder icon */}
                        <span>Lunch: 12:00 PM - 3:00 PM</span>
                    </div>
                    <div className="flex-row items-center justify-center text-xl text-gray-700">
                        <span>⏰</span> {/* Placeholder icon */}
                        <span>Dinner: 7:00 PM - 10:30 PM</span>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Restaurant;
