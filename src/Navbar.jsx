import { useState } from "react";
import logo from "/src/assets/Logo.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-4 lg:px-5 py-3 lg:py-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <a href="#" className="flex-shrink-0">
        <img src={logo} alt="Logo" className="max-h-16 transition-all duration-500" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="fas fa-bars"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex items-center space-x-4`}
        >
          <a href="index.html" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </a>
          <a href="about.html" className="text-gray-700 hover:text-gray-900 font-medium">
            About
          </a>
          <a href="booking.html" className="text-gray-700 hover:text-gray-900 font-medium">
            Booking
          </a>
          <a href="contact.html" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact
          </a>
          <a
            href="#"
            className="btn bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700"
          >
            Login
          </a>
          <a
            href="#"
            className="btn bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
