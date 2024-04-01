import React, { ReactNode } from "react";
import { Nunito } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Providers from "@/components/Provider";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Footer from "./footer";
import Navbar2 from "@/components/navbar/navbar2";
const nunito = Nunito({ subsets: ["latin"] });

interface NoNavbarLayoutProps {
  children: ReactNode;
}

const NoNavbarLayout = ({ children }: NoNavbarLayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Airnesy: Buy & Rent Real Estate, Apartments, homes & Comercial property</title>
        <meta
          name="description"
          content="The leading real eastate maeketplace. Your ultimate Home and Property Finder, Discover a world of endless property listings and find your dream home in a click."
        />
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Airnesy Group",
            "logo": "https://res.cloudinary.com/dcrqqqget/image/upload/v1711821828/favicon_zpzigj.jpg",
            "url": "https://www.airnesy.com"
          }`}
        </script>
      </Head>
      <body className={nunito.className}>
        
      
          <main className="pb-16 md:pt-28 pt-24">{children}</main>
          <Footer />
        
        <Analytics />
      </body>
    </html>
  );
};

export default NoNavbarLayout;
