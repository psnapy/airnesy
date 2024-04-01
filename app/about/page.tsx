import React from "react";
import NoNavbarLayout from "../nonavbarlayout";
import Heading from "@/components/Heading";
import Image from 'next/image';

const AboutPage = () => {
  return (
    <NoNavbarLayout>
      <section className="main-container4 text-center items-center ">
        <Heading
          title="airnesy"
          backBtn={false}
        />
        <div className="mt-8 ">
          <p className="text-lg mb-4">
            Welcome to our website! We are dedicated to providing excellent services.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
          
          <Image
        src="/images/stars-sparkle.gif  "
        alt="airnesy.com logo"
        
        fill
        sizes="150px"
        priority
      />
      

          {/* Add more content as needed */}
        </div>
      </section>
    </NoNavbarLayout>
  );
};

export default AboutPage;
