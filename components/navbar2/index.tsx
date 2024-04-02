
import { getCurrentUser } from "@/services/user";
import Link from 'next/link';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = async () => {
  const user = await getCurrentUser();

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 pt-4 ">
      <nav className="py-3 ">
        <div className="flex main-container5 flex-row justify-between items-center gap-3 md:gap-0">
        <p>

<Link href="https://www.airnesy.com/" className="hover:text-gray-900  fontsizee pl-2 " >
  <a> <b>airnesy.com</b></a>
</Link>
</p>

<div className="pl-4 ">

<Link href="https://www.airnesy.com/" >
                <a className="buttonnnn ">Blog</a>
              </Link>

              <Link href="https://www.airnesy.com/" className="pl-2">
                <a className="buttonnnn ">News</a>
              </Link>


            <Link href="https://www.airnesy.com/" className="pl-2">
                <a className="buttonnnn ">Careers</a>
              </Link>

              
            <Link href="https://www.airnesy.com/" className="pl-2 ">
                <a className="buttonnn ">Try it out</a>
              </Link>

              </div>
        </div>
      </nav>
     
    </header>
  );
};

export default Navbar;
