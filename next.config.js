// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is crucial for generating purely static HTML files
  // that can be deployed to static hosting services like Netlify.
  output: 'export',

// Optional: Add a trailing slash to all URLs for consistency
// trailingSlash: true,

  // Optional: Disable React Strict Mode for production builds if needed,
  // but it's generally good to keep it enabled for development.
  // reactStrictMode: true,
};

module.exports = nextConfig;
