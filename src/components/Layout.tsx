// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

// Layout component provides a consistent header, navigation, and footer
// for all pages in the website.
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex-col font-inter bg-lightblue text-darkblue">
            {/* Header and Navigation */}
            <header className="bg-darkblue text-white shadow-lg p-4 sticky top-0 z-50">
                <nav className="container flex-col md-flex-row justify-between items-center">
                    {/* Site Title/Logo */}
                    <Link href="/" className="site-title-link text-3xl font-bold mb-3 md-mb-0 rounded-md p-2 transition-colors flex-row items-center">
                        {/* New Stylized SVG Logo for "RK" - More balanced and modern */}
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                            <rect width="100" height="100" rx="20" fill="var(--color-primary)" />
                            <path d="M25 75V25H40L55 75H40L25 75ZM60 75V25H75V75H60Z" fill="var(--color-darkblue)" />
                            <path d="M60 25H75V40H60V25ZM60 45H75V60H60V45Z" fill="var(--color-darkblue)" />
                        </svg>
                        <i className='site-title-link'>&nbsp;{`  Hotel RK`}</i>
                    </Link>

                    {/* Navigation Links */}
                    <ul className="nav-list text-lg">
                        <li>
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/lodge">
                                <span>Lodge</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/restaurant">
                                <span>Restaurant</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery">
                                <span>Gallery</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow container p-4">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-darkblue text-white p-6 mt-8 shadow-inner">
                <div className="container grid grid-cols-1 md-grid-cols-3 gap-8 text-center md-text-left">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Contact Us</h3>
                        <p className="flex-row items-center justify-center md-justify-start mb-2 footer-text-item">
                            <span className="footer-icon">📍</span>
                            NH 53, Near Bus Stand, Malkapur, Maharashtra 443101
                        </p>
                        <p className="flex-row items-center justify-center md-justify-start footer-text-item">
                            <span className="footer-icon">📞</span>
                            +91 72622 52200
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/lodge" className="text-white hover-text-primary transition-colors">Lodge Accommodations</Link></li>
                            <li><Link href="/restaurant" className="text-white hover-text-primary transition-colors">Our Restaurant</Link></li>
                            <li><Link href="/gallery" className="text-white hover-text-primary transition-colors">Photo Gallery</Link></li>
                            <li><Link href="/contact" className="text-white hover-text-primary transition-colors">Location Map</Link></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">About Hotel RK</h3>
                        <p className="text-sm">
                            Experience comfort and authentic local flavors at RK Lodge & Restaurant.
                            Nestled conveniently near the Malkapur Bus Stand, we offer a perfect blend of hospitality and convenience.
                        </p>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-400 mt-8 pt-4 border-t border-gray-700">
                    &copy; {new Date().getFullYear()} RK Lodge & Restaurant. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
