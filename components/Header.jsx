import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">m.</span>staali
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
