 import React from 'react';
// Import social media icons (you may need to adjust the paths)
import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';

import Image from 'next/image';



// Import your company logo
import logo from './eastate.gif';
                       const Footer: React.FC = () => {
                         return (
                          <div>
                           <div className='pt-60 pb-60 bg-[#f0f0f0] text-center items-center  '>
                            <p className='pb-5  style="font-size: 20px;   '><b>join our community</b></p>

                            <div className="flex items-center justify-center  pl-5 pr-5  space-x-4">
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaInstagram /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaTwitter /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaTiktok /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaFacebookF /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaYoutube /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaReddit /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaDiscord /></a></div>
</div>

                  
    </div>               
            <footer className="bg-[#ffffff] text-black py-6  pt-20 pb-40">
                             <div className="container mx-auto flex flex-col md:flex-row  justify-between px-4">


     

                             <div>
                           <h1 className='pt-3   style="font-size: 20px;'>airnesy.com</h1>
                                 <p>&copy; {new Date().getFullYear()} Airnesy Group. All rights reserved.</p>
                               </div>

                               <div className="mb-4 md:mb-0">
                               <h1 className="text-lg font-bold">Company</h1>
                                 
                                   <p>
                                     <a href="#" className="hover:text-gray-400">About</a>
                                   </p>
                                   <p>
                                     <a href="#" className="hover:text-gray-400">careers</a>
                                   </p>
                                   <p>
                                     <a href="#" className="hover:text-gray-400">news</a>
                                   </p>
                                   <p>
                                     <a href="#" className="hover:text-gray-400">press</a>
                                   </p>

                                 
                               </div>


                               <div className="mb-4 md:mb-0">
                               <h1 className="text-lg font-bold">Product</h1>
                                
                                   <p>
                                     <a href="#" className="hover:text-gray-400">Web App</a>
                                   </p>
                                   <p>
                                     <a href="#" className="hover:text-gray-400">iphone App</a>
                                   </p>
                                   <p>
                                     <a href="#" className="hover:text-gray-400">Android App</a>
                                   </p>
                                 
                               </div>

                               <div className="mb-4 md:mb-0">
                                 <h1 className="text-lg font-bold">Contact </h1>
                                 <p className="mt-2">123 Main Street, NRB, Kenya</p>
                                 <p>Email: airnesy.info@gmail.com</p>
                                 <p> 
                                 Support
                                  </p>
                                 <p> 
                                 Privacy Policy
                                  </p>

<                                   p> 
                                 terms of Service  
                                  </p>
                               </div>
                              
                             </div>
                           </footer>
                           <hr />
                           </div>
                         );
                       };
                       
                       export default Footer;
                       
                       