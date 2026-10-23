import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/potato.png" />
        <link rel="apple-touch-icon" href="/potato.png" />

        {/* SEO Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Editorial Fonts: Instrument Serif + JetBrains Mono + Space Grotesk */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Initial Theme Detection to prevent flash - defaults to light mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </Head>
      <body className="bg-white dark:bg-[#080808] text-black dark:text-[#F3F3F3] antialiased transition-colors duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
