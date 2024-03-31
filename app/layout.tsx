// Import necessary modules from Next.js and React
import { useRouter } from "next/router";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { Nunito } from "next/font/google";
import Navbar from "@/components/navbar";
import Providers from "@/components/Provider";
import Footer from "./footer";

// Define the Nunito font with specified subsets
const nunito = Nunito({ subsets: ["latin"] });

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the router instance
  const router = useRouter();

  // Determine if the current page is the About page
  const isAboutPage = router.pathname === "/about";

  return (
    <html lang="en">
      <Head>
        <title>Airnesy: Buy & Rent Real Estate, Apartments, homes & Comercial property</title>
        <meta
          name="description"
          content="The leading real estate marketplace. Your ultimate Home and Property Finder, Discover a world of endless property listings and find your dream home in a click."
        />
        {/* JSON-LD script for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Airnesy Group",
            "logo": "https://res.cloudinary.com/dcrqqqget/image/upload/v1711821828/favicon_zpzigj.jpg",
            "url": "https://www.airnesy.com"
          })}
        </script>
      </Head>

      <body className={nunito.className}>
        {/* Wrap the content with Providers */}
        <Providers>
          <Navbar />
          {/* Render main content */}
          <main className="pb-16 md:pt-28 pt-24">{children}</main>
          <Footer />
        </Providers>
        {/* Include analytics */}
        <Analytics />
      </body>
    </html>
  );
}
