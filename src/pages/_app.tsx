// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global styles

// This is the entry point for all pages.
// It allows you to inject global styles, layout components,
// or context providers that apply to every page in your application.
function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
