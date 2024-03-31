import React, { Suspense } from "react";
import Logo from "@/components/navbar/";
import Search from "@/components/navbar/";
import Categories from "@/components/navbar/Categories";
import UserMenu from "@/components/navbar/";
import { getCurrentUser } from "@/services/user";

interface NavbarProps {}

const Navbar2: React.FC<NavbarProps> = async () => {
  const user = await getCurrentUser();

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 ">
      <nav className="py-3 border-b-[1px]">
        <div className="flex main-container flex-row justify-between items-center gap-3 md:gap-0">
          <Logo />
          <Suspense fallback={<></>}>
        
          </Suspense>
        
        </div>
      </nav>
    
    </header>
  );
};

export default Navbar2;