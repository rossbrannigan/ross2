// pages/index.js
import Head from 'next/head';
import Header from "./header";
import Subheader from "./subheader";
import Footer from "./footer";
import Cloud from "./cloud";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ross Brannigan | Digital Marketing & Airline Revenue Management Leader</title>
        <meta name="description" content="Ross Brannigan is a seasoned digital marketing leader and airline revenue management expert with extensive experience in driving digital transformation and revenue growth." />
        <meta name="keywords" content="Ross Brannigan, digital marketing leader, airline revenue management, digital transformation, eCommerce strategy" />
        <link rel="canonical" href="https://www.rossbrannigan.com" />
        <meta property="og:title" content="Ross Brannigan | Digital Marketing & Airline Revenue Management Leader" />
        <meta property="og:description" content="Ross Brannigan is a seasoned digital marketing leader and airline revenue management expert with extensive experience in driving digital transformation and revenue growth." />
        <meta property="og:url" content="https://www.rossbrannigan.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ross Brannigan | Digital Marketing & Airline Revenue Management Leader" />
        <meta name="twitter:description" content="Ross Brannigan is a seasoned digital marketing leader and airline revenue management expert with extensive experience in driving digital transformation and revenue growth." />
      </Head>

      <div>
        <Header />
        <Subheader />
        <Cloud />
        <Footer />
      </div>
    </>
  );
}