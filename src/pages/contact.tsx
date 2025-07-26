// pages/contact.tsx (Contact Information Page)
import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

// The Contact page provides contact details and an embedded map.
const Contact: React.FC = () => {
    // Google Maps embed URL for RK Lodge & Restaurant
    const googleMapsEmbedUrl: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.138402283626!2d76.22384237500001!3d20.98595708064402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd70b8a6f2b0f4f%3A0x3b3a3b3a3b3a3b3a!2sHotel%20D'Lodge%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"; // Placeholder timestamp, replace with actual embed link if you regenerate it from maps.

    return (
        <Layout>
            <Head>
                <title>Contact Us - RK Lodge & Restaurant</title>
                <meta name="description" content="Get in touch with RK Lodge & Restaurant in Malkapur. Find our address, phone number, and location on the map." />
            </Head>

            <section className="bg-white rounded-lg shadow-xl p-6 md-p-10">
                <h1 className="text-4xl font-bold text-darkblue mb-6 text-center">Get in Touch With Us</h1>
                <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
                    We'd love to hear from you! Whether you have questions about bookings, dining, or any other inquiry, feel free to reach out to us.
                </p>

                <div className="grid grid-cols-1 md-grid-cols-2 gap-10 mb-12">
                    {/* Contact Details */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-darkblue mb-4 flex-row items-center">✉️ Contact Information</h2> {/* Placeholder icon */}
                        <div className="space-y-4 text-gray-700">
                            <p className="flex-row items-center text-lg">
                                <span>📍</span> {/* Placeholder icon */}
                                NH 53, Near Bus Stand, Malkapur, Maharashtra 443101
                            </p>
                            <p className="flex-row items-center text-lg">
                                <span>📞</span> {/* Placeholder icon */}
                                <a href="tel:+917262252200" className="hover-underline">+91 72622 52200</a>
                            </p>
                            <p className="flex-row items-center text-lg">
                                <span>📧</span> {/* Placeholder icon */}
                                <a href="mailto:info@hoteldlodge.com" className="hover-underline">info@hoteldlodge.com</a> (Placeholder)
                            </p>
                            <h3 className="text-xl font-semibold text-darkblue mt-6 mb-2 flex-row items-center">⏰ Business Hours</h3> {/* Placeholder icon */}
                            <p>Lodge: 24/7</p>
                            <p>Restaurant: 7:00 AM - 10:30 PM</p>
                        </div>
                    </div>

                    {/* Contact Form (Placeholder) */}
                    <div className="bg-lightblue p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-darkblue mb-4 flex-row items-center">✉️ Send Us a Message</h2> {/* Placeholder icon */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus-ring-2 focus-ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus-ring-2 focus-ring-primary"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus-ring-2 focus-ring-primary"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary hover-bg-primary-dark text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover-scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-darkblue mb-6 text-center">Find Us on the Map</h2>
                    <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                        <iframe
                            src={googleMapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="RK Lodge & Restaurant Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
