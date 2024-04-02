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
              <div className="section2 pt-4">
                <div className="flex justify-between">
                  {/* Left Column */}
                  <div className="w-1/4">
                    <Image
                       src="/images/gif.gif" // Replace with path to left image
                      alt="Left Image"
                      width={200} // Adjust width as needed
                      height={200} // Adjust height as needed
                    />
                  </div>
                  
                  {/* Center Column */}
                  <div className="w-1/2 flex justify-between flex-col">
                    <div className="flex justify-between">
                      <Image
                        src="/images/gif.gif" // Replace with path to top center image
                        alt="Center Top Image"
                        width={200} // Adjust width as needed
                        height={200} // Adjust height as needed
                      />
                      <Image
                       src="/images/gif.gif"  // Replace with path to top right image
                        alt="Center Top Right Image"
                        width={200} // Adjust width as needed
                        height={200} // Adjust height as needed
                      />
                    </div>
                    <div className="flex justify-between">
                      <Image
                         src="/images/gif.gif"  // Replace with path to bottom left image
                        alt="Center Bottom Left Image"
                        width={200} // Adjust width as needed
                        height={200} // Adjust height as needed
                      />
                      <Image
                        src="/images/gif.gif"  // Replace with path to bottom right image
                        alt="Center Bottom Right Image"
                        width={200} // Adjust width as needed
                        height={200} // Adjust height as needed
                      />
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="w-1/4">
                    <Image
                     src="/images/gif.gif"  // Replace with path to right image
                      alt="Right Image"
                      width={200} // Adjust width as needed
                      height={200} // Adjust height as needed
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
