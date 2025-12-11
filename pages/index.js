import dynamic from 'next/dynamic';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';
import AchievementsSection from '../components/AchievementsSection';
import InfiniteMovingCardsDemo from '../components/InfiniteMovingCards';

//Server: not found error handler
const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: false,
});

export default function Home() {
  const siteUrl = 'https://shaunlim.com';
  const pageTitle = 'Shaun Lim - CS Student | Product Manager | Web3 Builder';
  const pageDescription =
    'Portfolio of Shaun Lim - Computer Science Student, Product Manager, and Web3 Builder. Explore my projects in blockchain, web development, and innovative tech solutions.';
  const ogImage = `${siteUrl}/shaunsquare.jpg`;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Shaun Lim, Computer Science, Product Manager, Web3, Blockchain, Portfolio, Developer, Student, Tech, Web Development"
        />
        <meta name="author" content="Shaun Lim" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Shaun Lim Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
      </Head>

      <HeroSection />
      <AchievementsSection />
      <AboutMe />
      <Projects />
      <InfiniteMovingCardsDemo />
      <EmailSection />
      <Footer />
    </>
  );
}
