
import React from "react";

import Avatar from "@/components/Avatar";

interface ListingProfileInfoProps {
  user: {
    image: null | string;
    name:null  | string;
  };
}

const ListingProfileInfo: React.FC<ListingProfileInfoProps> = ({
  user,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-[16px] font-semibold flex flex-row items-center gap-2">
          <span className="mr-1">Hosted by</span> <Avatar src={user?.image} />
          <span> {user?.name}</span>
        </div>
        <div
          className="flex flex-row items-center gap-4 font-light text-neutral-700"
        >
           
        </div>
      </div> 
    </div>
  );
};

export default ListingProfileInfo;
