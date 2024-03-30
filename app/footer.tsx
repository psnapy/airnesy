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
                            <h2><b>join our community</b></h2>

                            <div className="flex items-center justify-center  pl-10 pr-10  space-x-4">
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
                             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">


     

                             <div>
                             <h5 className="text-lg font-bold">airnesy.com</h5>
                                 <p>&copy; {new Date().getFullYear()} Airnesy Group. All rights reserved.</p>
                               </div>

                               <div className="flex justify-center">
                               <h1 className="text-lg font-bold">Company</h1>
                                 <ul className="flex space-x-4">
                                   <ul>
                                     <a href="#" className="hover:text-gray-400">About</a>
                                   </ul>
                                   <ul>
                                     <a href="#" className="hover:text-gray-400">careers</a>
                                   </ul>
                                   <ul>
                                     <a href="#" className="hover:text-gray-400">news</a>
                                   </ul>
                                   <ul>
                                     <a href="#" className="hover:text-gray-400">press</a>
                                   </ul>

                                 </ul>
                               </div>


                               <div className="flex justify-center">
                               <h1 className="text-lg font-bold">Product</h1>
                                 <ul className="flex space-x-4">
                                   <ul>
                                     <a href="#" className="hover:text-gray-400">Web App</a>
                                   </ul>
                                   <ul>
                                     <a href="#" className="hover:text-gray-400">iphone App</a>
                                   </ul>
                                   <ul>
                                     <a href="#" className="hover:text-gray-400">Android App</a>
                                   </ul>
                                 </ul>
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
                                 erms of Service  
                                  </p>
                               </div>
                              
                             </div>
                           </footer>
                           <hr />
                           </div>
                         );
                       };
                       
                       export default Footer;
                       
                       