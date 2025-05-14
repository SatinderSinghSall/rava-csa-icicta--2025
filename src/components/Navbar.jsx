import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // for mobile dropdown

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 leading-tight tracking-tight"
        >
          <span className="block sm:inline">REVA University - CSA</span>{" "}
          <span className="block sm:inline">ICICTA 2025</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            to="/call-for-papers"
            className="hover:text-blue-600 transition"
          >
            Call for Papers
          </Link>

          {/* Desktop About Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center space-x-1 hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              <span className="text-lg">About</span>
              <ChevronDown size={16} />
            </button>

            {/* Dropdown Content */}
            {isAboutOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50 opacity-100 transition-all duration-300 ease-in-out">
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  About Us
                </Link>
                <Link
                  to="/organizing-committee"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  Organizing Committee
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/technical-session"
            className="hover:text-blue-600 transition"
          >
            Technical Session
          </Link>

          <Link to="/contact-us" className="hover:text-blue-600 transition">
            Contact Us
          </Link>

          {/* <Link
            to="/admin/login"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-sm"
          >
            Admin Login
          </Link> */}
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-inner rounded-b-lg animate-slide-down">
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link
              to="/"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/call-for-papers"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Call for Papers
            </Link>

            {/* Mobile About Dropdown Toggle */}
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center justify-between w-full hover:text-blue-600"
            >
              <span>About</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isAboutOpen && (
              <div className="pl-4 flex flex-col space-y-2 text-sm">
                <Link
                  to="/about-us"
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/organizing-committee"
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Organizing Committee
                </Link>
              </div>
            )}

            <Link
              to="/technical-session"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Technical Session
            </Link>

            <Link
              to="/contact-us"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            {/* <Link
              to="/admin/login"
              className="bg-blue-600 text-white text-center px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
