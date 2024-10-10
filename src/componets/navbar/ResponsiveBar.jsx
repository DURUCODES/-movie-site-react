import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useState } from "react";
const ResponsiveBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <DesktopNav opennavbar={openNav} />
      <MobileNav isOpen={isOpen} closeNavBar={closeNav} />
    </div>
  );
};

export default ResponsiveBar;
