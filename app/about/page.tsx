import React from "react";
import NoNavbarLayout from "../nonavbarlayout";
import Heading from "@/components/Heading";
import Image from 'next/image';

const AboutPage = () => {
  return (
    <NoNavbarLayout>
      <section className="main-container4 text-center items-center ">
        <Heading
          title=""
          backBtn={false}
        />
        <div className="mt-6 ">
          <p className="textlg mb-6">
            airnesy.com
          </p>
          <p className="textlg mb-4">
            Home far away from home
          </p>
          <p className="textlg ">
          making your dreams come true
          </p>
          

          <div className="pt-5">
          <Image className="gif rounded-xl "
              src="/images/gif.gif" // Replace this with the actual path to your image
              alt="Description of the image"
            
            />
          </div>

          {/* Add more content as needed */}
        </div>
      </section>
    </NoNavbarLayout>
  );
};

export default AboutPage;
