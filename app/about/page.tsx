import React from "react";
import NoNavbarLayout from "../nonavbarlayout";
import Heading from "@/components/Heading";

const AboutPage = () => {
  return (
    <NoNavbarLayout>
      <section className="main-container3">
        <Heading
          title="About Us"
          subtitle="Learn more about our company."
          backBtn={false}
        />
        <div className="mt-8">
          <p className="text-lg mb-4">
            Welcome to our website! We are dedicated to providing excellent services.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
          {/* Add more content as needed */}
        </div>
      </section>
    </NoNavbarLayout>
  );
};

export default AboutPage;
