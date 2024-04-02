
import { getCurrentUser } from "@/services/user";
import Link from 'next/link';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = async () => {
  const user = await getCurrentUser();

  return (
    <header >

     
    </header>
  );
};

export default Navbar;
