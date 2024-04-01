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
        <div className="mt-6">
          <p className="textlg mb-6"> <b>
          airnesy.com
          </b>
          
          </p>
          <div  className=" div17  "><p className="textlg1 mb-4  "> <b>  Making your dream home come true every day </b>   </p> </div>
          
         
         
          

          <div className="pt-15">
          <Image className="gif rounded-xl "
              src="/images/gif.gif" // Replace this with the actual path to your image
              alt="Description of the image"
            
            />
          </div>


          <div className="div17 pt-8 text-left">
          <p className="textlg mb-4 mt-8 "> <b>
          about us
          </b> </p>

          <p>
               Airnesy is the leading real  estate marketplace globalling. airnesy’s ecosystem of products and services is designed to provide a seamless, 
              end-to-end property searching experience, helping renters, shoppers,
               buyers and sellers with every step of their journey. Founded to empower people with information so they could find the right home, 
              Zillow is synonymous with real estate. As the most visited, most trusted1 name in the industry, “Zillow”
              is searched more often than “real estate,”2 and our data indicates 70% of all home buyers and sellers use Zillow at some point in their transaction.
          </p>



          </div>

          {/* Add more content as needed */}
        </div>
      </section>
    </NoNavbarLayout>
  );
};

export default AboutPage;
