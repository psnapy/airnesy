import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/Provider";

import { Analytics } from '@vercel/analytics/react';
 
import Footer from "./footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airnesy: Buy & Rent Real Estate, Apartments, homes & Comercial property",
  description:
    "The leading real eastate maeketplace. Your ultimate Home and Property Finder, Discover a world of endless property listings and find your dream home in a click.",
    

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">

     <link rel="icon" href="/favicon.ico" />
      
      <body className={nunito.className}>
        <Providers>
          <Navbar />
          <main className="pb-16 md:pt-28 pt-24">{children}</main>


          <Footer/>
        </Providers>
       
        <Analytics />
      </body>



    </html>
  );
}
