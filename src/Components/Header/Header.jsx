import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  helpMateLogo,
  scrollThreshold,
  helpMateLogoText,
} from "../../Constants/Constants";
import "../../../src/index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= scrollThreshold) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-black text-white duration-500 ease-in ${
        isScroll ? "sticky top-0" : " "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src={helpMateLogo}
              alt={helpMateLogoText}
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="services" className="hover:text-gray-300">
              Services
            </Link>
            <Link to="contact" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300 text-xl">
              <FontAwesomeIcon icon={faUser} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black">
          <Link to="#/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link to="about" className="block hover:text-gray-300">
            About
          </Link>
          <Link to="services" className="block hover:text-gray-300">
            Services
          </Link>
          <Link to="contact" className="block hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
