// pages/about.tsx

import Head from 'next/head';
import React from 'react';

const Aboutpage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <div>
        <h1>About Us</h1>
        <p>Welcome to our About page!</p>
        <p>We are a company dedicated to providing excellent services.</p>
      </div>
    </div>
  );
};

export default Aboutpage;
