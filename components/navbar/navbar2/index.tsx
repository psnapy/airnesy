import React, { Suspense } from "react";
import Logo from "../Logo";
import Search from "../Search";
import Categories from "../Categories";
import UserMenu from "../UserMenu";
import { getCurrentUser } from "@/services/user";

interface NavbarProps {}

const Navbar2: React.FC<NavbarProps> = async () => {
  const user = await getCurrentUser();

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 ">
      <nav className="py-3 border-b-[1px]">
        <div className="flex main-container3 flex-row justify-between items-center gap-3 md:gap-0">
          <Logo />
        
          <UserMenu user={user} />
        </div>
      </nav>
    
    </header>
  );
};

export default Navbar2;