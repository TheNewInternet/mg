import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      {children}
      <Footer />
    </div>
  );
}
