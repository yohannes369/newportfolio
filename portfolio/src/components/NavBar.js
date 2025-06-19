import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Experience", to: "experience" },
    { id: 4, name: "Projects", to: "projects" },
    { id: 5, name: "Contact", to: "contact" },
  ];

  return (
    <div className={`fixed w-full h-20 flex justify-between items-center px-4 z-50 ${
      scrolled ? "bg-gray-900/90 backdrop-blur-sm" : "bg-gray-900/80"
    } transition-all duration-300`}>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="flex items-center cursor-pointer"
      >
        <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Portfolio
        </span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8">
        {links.map(({ id, name, to }) => (
          <li key={id}>
            <Link
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium text-lg"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Button */}
      <div onClick={() => setNav(!nav)} className="md:hidden z-10 text-gray-300 hover:text-white cursor-pointer">
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 ${nav ? 'translate-y-0' : '-translate-y-full'}`}>
        {links.map(({ id, name, to }) => (
          <li key={id} className="py-6 text-2xl">
            <Link
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setNav(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;