import React from "react";
import NoNavbarLayout from "../nonavbarlayout";
import Heading from "@/components/Heading";
import Image from 'next/image';
import Link from 'next/link'; 





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
          <div  className=" div17  "><p className="textlg1 mb-4 pb-8 "> <b>  Making your dream home come true every day </b>   </p> </div>
          
         
         
          

          <div className="pt-8 pb-8">
          <Image className="gif rounded-xl "
              src="/images/gif.gif" // Replace this with the actual path to your image
              alt="Description of the image"
            
            />
          </div>


          <div className="div17 pt-8 text-left">
          <p className="textlg mb-4 pt-8 "> <b>
          About us
          </b> </p>

          <p className="pt-2">
               Airnesy is the leading real  estate marketplace globally. airnesy’s ecosystem of 
               products and services is designed to provide a seamless, end-to-end property listing and searching
                experience, helping renters, shoppers,buyers and sellers with every step of their journey to findind their dream property.
                </p>  
              
              
                <p className="pt-3">
                Airnesy is synonymous with real estate.
                </p>
            <p className="pt-3">

            As the most visited, most trusted1 name in the industry, “airnesy
              is searched more often than “real estate.”
            </p>
          

            <div className="pt-6 flex ">
              <div>
              <Link href="/#">
                <a className="buttonn">Learn more</a>
              </Link>
            </div>

            <div className="pl-4">
            <Link href="/#">
                <a className="buttonn ">In the news</a>
              </Link>

              </div>
            </div>

          </div>

          {/* Add more content as needed */}
        </div>
      </section>

 



      <section className="pt-8">
            <div className="pt-8">
              <div className="section2 pt-4 pb-4">
                <div className="flex justify-between  main-container4  ">
                  {/* Left Column */}
                  <div className="flex justify-center items-center">
  <Image
    className="rounded-xl"
    src="/images/a.jpg"
    alt="Left Image"
     // Adjust width as needed
    height={800} // Remove the height attribute or set it to null
  />
</div>



{/* Right Column */}
<div className="flex justify-center items-center">
  <Image
    className="rounded-xl"
    src="/images/a.jpg"
    alt="Right Image"

    width={400}
  />
</div>


                </div>
              </div>
            </div>
          </section>
     






    </NoNavbarLayout>
  );
};

export default AboutPage;
