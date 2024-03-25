import React from "react";
import Image from "@/components/Image";

import Heading from "@/components/Heading";
import HeartButton from "@/components/HeartButton";
import { getFavorites } from "@/services/favorite";

interface ListingHeadProps {
  title: string;
  country: string | null;
  region: string | null;
  image: string;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = async ({
  title,
  country = "",
  region = "",
  image,
  id,
}) => {
  const favorites = await getFavorites();
  const hasFavorited = favorites.includes(id);

  return (
    <>
      <Heading title={title} subtitle={`${region}, ${country}`} backBtn/>
      
        





        <div style={{ display: 'flex' }}className="
          w-full
        
          overflow-hidden 
          rounded-xl
          aspect-[1/0.5] 
          relative
           transition duration-300`
        "  >
      {/* Left Div */}
      <div style={{ width: '75%',marginRight: '1%' }}className="
          w-full
          h-full
          overflow-hidden 
          
          relative
        "  >
        <Image
         imageSrc={image}
        
          fill
          className="object-cover w-full"
          alt="Image"
        />
      </div>

      {/* Right Div */}
      <div style={{ width: '25%',  }}>
        {/* Nested Divs */}
        <div style={{ height: '25%', marginBottom: '2%'  }}className="
          w-full
          h-full
          overflow-hidden 
          
          relative
        "  >
        <Image
         imageSrc={image}
        
          fill
          className="object-cover w-full"
          alt="Image"
        />
          
        </div>
        <div style={{ height: '25%', marginBottom: '2%' }}className="
          w-full
          h-full
          overflow-hidden 
          
          relative
        "  >
        <Image
         imageSrc={image}
        
          fill
          className="object-cover w-full"
          alt="Image"
        />
        </div>
        <div style={{ height: '25%', marginBottom: '2%' }}className="
          w-full
          h-full
          overflow-hidden 
          
          relative
        "  >
        <Image
         imageSrc={image}
        
          fill
          className="object-cover w-full"
          alt="Image"
        />
        </div>
        <div style={{ height: '25%', marginBottom: '2%' }}className="
          w-full
          h-full
          overflow-hidden 
          
          relative
        "  >
        <Image
         imageSrc={image}
        
          fill
          className="object-cover w-full"
          alt="Image"
        />
        </div>
      </div>
    </div>



      
    </>
  );
};

export default ListingHead;
