import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-red"
          >
            NexSolvix
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden text-secondary focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu for Large Screens */}
        <div className="hidden lg:flex items-center space-x-60 text-secondary font-medium">
          <ul className="flex space-x-20">
            <li>
              <Link
                to="/"
                className="block hover:text-primary hover:font-semibold py-2"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about-us"
                className="block hover:text-primary hover:font-semibold py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block hover:text-primary hover:font-semibold py-2"
              >
                Careers
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center space-x-1 focus:outline-none py-2 ${
                  isDropdownOpen
                    ? "text-primary font-semibold px-4 py-2 rounded-md"
                    : "hover:text-primary hover:font-semibold"
                }`}
              >
                <span>Services</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-4 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/about-us"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact-us"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                      >
                        Mobile App Development{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact-us"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                      >
                        Digital Marketing{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact-us"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                      >
                        Social Media Marketing{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <Link
            to="/login"
            className="bg-primary text-white font-sm py-2 px-4 rounded-md"
          >
Contact Us          </Link>
        </div>
      </div>

      {/* Mobile Menu Sliding in from Left */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="py-6 px-4">
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-red"
            >
              NexSolvix
            </Link>
          </div>
          <ul className="space-y-4 text-secondary font-medium mt-5">
            <li>
              <Link
                to="/properties"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/calculate-earnings"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Careers{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Digital Marketing{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Software Development{" "}
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/contact-us"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Social Media Marketing{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block hover:text-primary hover:font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Mobile App Development{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block bg-primary text-white py-2 px-4 rounded-md text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
