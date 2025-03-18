import React from 'react';
import { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "../utils/useContextTheme";
import useOnlineCheck from "../utils/useOnlineCheck";
import { useSelector } from "react-redux";
import { Logo } from "../utils/apibase";

const OnlineStatusIndicator = ({ online }) => (
  <div className="flex items-center gap-2 text-sm">
    <span
      className={`inline-block w-3 h-3 rounded-full ${
        online ? "bg-green-500" : "bg-red-500"
      }`}
    ></span>
    <span className={`${online ? "text-green-600" : "text-red-600"} font-medium`}>
      {online ? "Online" : "Offline"}
    </span>
  </div>
);

export const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineCheck();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setButtonText((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  // Subscribing to store using selector
  const cart = useSelector((store) => store.cart.items);
  return (
    <header
      className={`${theme === "dark" ? "bg-gray-900" : "bg-blue-600"} text-white shadow-lg`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-8 md:py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
          <img
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white transition-all transform hover:scale-105"
            src={`${Logo}`}
            alt="Logo"
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-all">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-all">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-all">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-yellow-300 transition-all">
          🛒 {cart.length === 0 ? "" : cart.length}
          </Link>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
            onClick={handleClick}
            aria-label="Login or Logout"
          >
            {buttonText}
          </button>
          <OnlineStatusIndicator online={onlineStatus} />

          {/* Dark Mode Toggle Button */}
          <div className="flex justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
            >
              {theme === "dark" ? (
                <span className="text-yellow-400">🌞</span> // Sun icon for light mode
              ) : (
                <span className="text-gray-800">🌙</span> // Moon icon for dark mode
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className={`${theme === "dark" ? "bg-gray-800" : "bg-blue-500"} text-white shadow-lg md:hidden`}
        >
          <nav className="flex flex-col items-center gap-4 py-4 text-lg">
            <Link
              to="/"
              className="hover:text-yellow-300 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="hover:text-yellow-300 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
           🛒 {cart.length === 0 ? "" : cart.length}
            </Link>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
              onClick={handleClick}
              aria-label="Login or Logout"
            >
              {buttonText}
            </button>
            <OnlineStatusIndicator online={onlineStatus} />
            <div className="flex justify-end">
              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
              >
                {theme === "dark" ? (
                  <span className="text-yellow-400">🌞</span> // Sun icon for light mode
                ) : (
                  <span className="text-gray-800">🌙</span> // Moon icon for dark mode
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;