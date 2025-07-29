import '../styles/globals.css';
import Chatbot from '../components/Chatbot';
import CursorTrail from '@/components/CursorTrail';
import { useEffect } from 'react';
import VisitPopup from "@/components/VisitPopup";
import Head from 'next/head'; // ✅ Import Head

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
        <meta property="og:title" content="Muktha Suvarna | Portfolio" />
        <meta
          property="og:description"
          content="Check out my developer portfolio and projects."
        />
        <meta property="og:image" content="/cover-image.jpg" />
        <meta property="og:url" content="https://your-vercel-url.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CursorTrail />
      <Component {...pageProps} />
      <Chatbot />
      <VisitPopup />
    </>
  );
}

export default MyApp;
