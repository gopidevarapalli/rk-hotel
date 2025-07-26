// pages/gallery.tsx (Image Gallery Page)
import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

// The Gallery page displays a collection of images.
const Gallery: React.FC = () => {
    // Array of placeholder image URLs
    const images: string[] = [
        "https://placehold.co/600x400/4CAF50/FFFFFF?text=Lodge+Exterior",
        "https://placehold.co/600x400/2C3E50/FFFFFF?text=Lodge+Room+1",
        "https://placehold.co/600x400/FFC107/2C3E50?text=Restaurant+Dining",
        "https://placehold.co/600x400/4CAF50/FFFFFF?text=Lodge+Room+2",
        "https://placehold.co/600x400/2C3E50/FFFFFF?text=Restaurant+Kitchen",
        "https://placehold.co/600x400/FFC107/2C3E50?text=Hotel+Lobby",
        "https://placehold.co/600x400/4CAF50/FFFFFF?text=Lodge+Bathroom",
        "https://placehold.co/600x400/2C3E50/FFFFFF?text=Restaurant+Food",
        "https://placehold.co/600x400/FFC107/2C3E50?text=Hotel+View",
    ];

    return (
        <Layout>
            <Head>
                <title>Gallery - RK Lodge & Restaurant</title>
                <meta name="description" content="View photos of RK Lodge & Restaurant, showcasing our rooms, dining area, and facilities." />
            </Head>

            <section className="bg-white rounded-lg shadow-xl p-6 md-p-10">
                <h1 className="text-4xl font-bold text-darkblue mb-8 text-center">Our Photo Gallery</h1>
                <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
                    Explore the beauty and comfort of RK Lodge & Restaurant through our curated photo gallery. Get a glimpse of our inviting rooms, elegant dining spaces, and the overall ambiance that awaits you.
                </p>

                <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-md group hover-shadow-xl transition-shadow duration-300">
                            <img
                                src={src}
                                alt={`Hotel D'Lodge Image ${index + 1}`}
                                className="w-full h-64 object-cover transform group-hover-scale-105 transition-transform duration-300"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/666666?text=Image+Error"; }}
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover-opacity-100 flex-row items-center justify-center transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold">View Detail</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;
