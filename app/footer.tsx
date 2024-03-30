 import React from 'react';

                       const Footer: React.FC = () => {
                         return (
                           <div className='pt-80'>
                       
                             <hr />
                           <footer className="bg-[#f0f0f0] text-black py-6 ">
                             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                               <div className="mb-4 md:mb-0">
                                 <h3 className="text-lg font-bold">Airnesy Group</h3>
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
                       
                       