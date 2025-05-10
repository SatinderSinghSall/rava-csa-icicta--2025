import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          REVA: CSA ICICTA 2025
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
          <Link to="/about-us" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact-us" className="hover:text-blue-600 transition">
            Contact Us
          </Link>
          <Link
            to="/admin/login"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-sm"
          >
            Admin Login
          </Link>
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
            <Link
              to="/about-us"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/admin/login"
              className="bg-blue-600 text-white text-center px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
