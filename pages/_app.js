import '../styles/globals.css';
import Chatbot from '../components/Chatbot';
import CursorTrail from '@/components/CursorTrail';
import { useEffect } from 'react';
import VisitPopup from "@/components/VisitPopup";
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"; // ✅ use /react

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Optional logic
  }, []);

  return (
    <>
      <Head>
        <title>Muktha Suvarna | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Muktha Suvarna - Full Stack Developer passionate about building sleek websites and creative software solutions."
        />
        <meta
          name="keywords"
          content="Muktha Suvarna, Web Developer, Portfolio, React, Next.js, Tailwind, Full Stack"
        />
        <meta name="author" content="Muktha Suvarna" />

        {/* Open Graph (Link Preview) */}
        <meta property="og:title" content="Muktha Suvarna | Portfolio" />
        <meta
          property="og:description"
          content="Check out my developer portfolio and projects."
        />
        <meta
          property="og:image"
          content="https://portfolio-mukthas-projects-7e55e4c8.vercel.app/logo.png"
        />
        <meta
          property="og:url"
          content="https://portfolio-mukthas-projects-7e55e4c8.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="0Y7mLLyiddNQLFX6CKUJF3nT2p_kzE8Qw0n9Ujcq8Wg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CursorTrail />
      <Component {...pageProps} />
      <Chatbot />
      <VisitPopup />

      {/* 👇 Add analytics here */}
      <Analytics />
    </>
  );
}

export default MyApp;
