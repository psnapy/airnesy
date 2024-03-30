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

                            <div className="flex items-center justify-center  ml-10 mr-10  space-x-4">
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
                           <h1><b>airnesy.com</b></h1>
                                 <p>&copy; {new Date().getFullYear()} Airnesy Group. All rights reserved.</p>
                               </div>

                               <div className="flex justify-center">
                               <h1 className="text-lg font-bold">Company</h1>
                                 <li className="flex space-x-4">
                                   <li>
                                     <a href="#" className="hover:text-gray-400">About</a>
                                   </li>
                                   <li>
                                     <a href="#" className="hover:text-gray-400">careers</a>
                                   </li>
                                   <li>
                                     <a href="#" className="hover:text-gray-400">news</a>
                                   </li>
                                   <li>
                                     <a href="#" className="hover:text-gray-400">press</a>
                                   </li>

                                 </li>
                               </div>


                               <div className="flex justify-center">
                               <h1 className="text-lg font-bold">Product</h1>
                                 <li className="flex space-x-4">
                                   <li>
                                     <a href="#" className="hover:text-gray-400">Web App</a>
                                   </li>
                                   <li>
                                     <a href="#" className="hover:text-gray-400">iphone App</a>
                                   </li>
                                   <li>
                                     <a href="#" className="hover:text-gray-400">Android App</a>
                                   </li>
                                 </li>
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
                       
                       