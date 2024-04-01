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
          <div  className=" div17  "><p className="textlg1 mb-4  "> <b>  Making your dreams come true every day </b>   </p> </div>
          
         
         
          

          <div className="pt-9">
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
