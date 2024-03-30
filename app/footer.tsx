 import React from 'react';
// Import social media icons (you may need to adjust the paths)
import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';

import Image from 'next/image';



// Import your company logo
import logo from './eastate.gif';
                       const Footer: React.FC = () => {
                         return (
                          <div>
                           <div className='pt-40 pb-40 bg-[#f0f0f0] text-center items-center  '>
                            <h2><b>join our community</b></h2>

                            <div className="flex items-center justify-center space-x-4">
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaInstagram /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaTwitter /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaTiktok /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaFacebookF /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaYoutube /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaReddit /></a></div>
    <div className="icon-circle"><a href="#" className="hover:text-gray-400"><FaDiscord /></a></div>
</div>

                  
    </div>               
            <footer className="bg-[#ffffff] text-black py-6 ">
                             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">


     

                               <div className="mb-4 md:mb-0">
                                 <h2 className="text-lg font-bold">airnesy group</h2>
                                 <p className="mt-2">123 Main Street, NRB, Kenya</p>
                                 <p>Email: airnesy.info@gmail.com</p>
                               </div>
                               <div className="flex justify-center">
                                 <ul className="flex space-x-4">
                                   <li>
                                     <a href="#" className="hover:text-gray-400">About</a>
                                   </li>
                                   <li>
                                     <a href="#" className="hover:text-gray-400">Services</a>
                                   </li>
                                   <li>
                                     <a href="#" className="hover:text-gray-400">Careers</a>
                                   </li>
                                 </ul>
                               </div>
                               <div>
                                 <p>&copy; {new Date().getFullYear()} Airnesy Group. All rights reserved.</p>
                               </div>
                             </div>
                           </footer>
                           </div>
                         );
                       };
                       
                       export default Footer;
                       
                       