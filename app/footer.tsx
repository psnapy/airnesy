
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-[#ffffff] pt-80 w-full">
      <footer className="flex justify-center items-center bg-[#f0f0f0] pt-10 pb-10 px-5">
        <div className='text-center p-5'>
          <p>Copyright © 2024 airnesy. All rights reserved.</p>
          <p>This site is in Development. Stay tuned for the full release!</p>
        </div>

        <div className='text-center p-5'>
          <p>airney.info@gmail.com</p>
        </div>

        <div className='text-center p-5'>
          <p>about</p>
          <p>careers</p>
        </div>

        <div className='text-center p-5'>
          <p>
            <span>about</span> <span>careers</span>
          </p>
          <p>Terms . Sitemap . Privacy . English (US) . $ USD .</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
