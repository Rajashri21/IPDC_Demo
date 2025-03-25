// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialMediaIcons from '../components/SocialMediaIcons';
import CoreValues from '../components/CoreValues';
import BusinessPartners from '../components/BusinessPartners';
import IPDCGlance from '../components/IPDCGlance';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>IDPC Finance</title>
        <meta name="description" content="A responsive landing page built with Next.js, Bootstrap 5, and SCSS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <SocialMediaIcons />
        <CoreValues />
        <BusinessPartners />
        <IPDCGlance />
        <NewsletterForm />
        {/* Additional sections can be added here */}
      </main>
      
      <Footer />
    </>
  );
}
