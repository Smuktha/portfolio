import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />

        {/* Open Graph / Link Preview Meta Tags */}
        <meta property="og:title" content="Muktha Suvarna | Portfolio" />
        <meta
          property="og:description"
          content="Creative developer building modern websites and UI experiences. Explore my projects and connect!"
        />
        <meta
          property="og:image"
          content="https://portfolio-mukthas-projects-7e55e4c8.vercel.app/logo.png"
        />
        <meta
          property="og:url"
          content="https://portfolio-mukthas-projects-7e55e4c8.vercel.app"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muktha Suvarna | Portfolio" />
        <meta
          name="twitter:description"
          content="Creative developer building modern websites and UI experiences. Explore my projects and connect!"
        />
        <meta
          name="twitter:image"
          content="https://portfolio-mukthas-projects-7e55e4c8.vercel.app/logo.png"
        />

        {/* Devicon CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
