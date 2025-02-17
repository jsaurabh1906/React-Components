import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaDropbox,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaUser,
  FaAngleDown,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const components = [
    { name: "Accordion", href: "/components/accordion" },
    { name: "Buttons", href: "/components/buttons" },
    { name: "Cards", href: "/components/cards" },
    { name: "Forms", href: "/components/forms" },
    { name: "Modals", href: "/components/modals" },
    { name: "Tabs", href: "/components/tabs" },
  ];

  const profileOptions = [
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Login", href: "/login" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      {/* Main Navbar */}
      <div className="max-w-screen mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-xl bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text font-playfair tracking-wide"
          >
            React Components
          </Link>
          {/* Desktop Navigations */}
          <div className="hidden space-x-8 md:flex ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center text-gray-700  font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-indigo-700 underline"
                    : "hover:text-indigo-500"
                } `
              }
            >
              <FaHome className="w-4 h-4 mr-1" />
              Home
            </NavLink>
            {/* Components Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsComponentsOpen(!isComponentsOpen)}
                className="flex items-center text-gray-700 hover:text-indigo-500 transition-colors duration-200"
              >
                <FaDropbox className="w-4 h-4 mr-1" />
                Components
                <FaAngleDown
                  className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                    isComponentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 ${
                  isComponentsOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {components.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 ${
                        isActive
                          ? "bg-indigo-100 font-semibold"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {/* Profile Dropdown */}
          <div className="hidden space-x-8 md:flex">
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center text-gray-700 hover:text-indigo-500 transition-colors duration-200"
              >
                <FaUser className="w-4 h-4 mr-1" />
                Profile
                <FaAngleDown
                  className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 ${
                  isProfileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {profileOptions.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 ${
                        isActive
                          ? "bg-indigo-100 font-semibold"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-500 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* =============================================================== */}
      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 text-gray-700 rounded-md transition-colors duration-300  ${
                isActive ? "bg-indigo-100 font-semibold" : "hover:bg-indigo-50"
              }`
            }
          >
            <FaHome className="w-4 h-4 mr-2" /> Home
          </NavLink>
          {/* Mobile components navigation */}
          <div>
            <button
              onClick={() => setIsComponentsOpen(!isComponentsOpen)}
              className="flex items-center  px-3 py-2 w-full rounded-md text-gray-700 hover:bg-indigo-50 transition-colors duration-300"
            >
              <FaDropbox className="w-4 h-4 mr-2" />
              Components
              <FaAngleDown
                className={`w-4 h-4 ml-auto transform transition-transform duration-200 ${
                  isComponentsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={` pl-6 transition-all duration-300 ${
                isComponentsOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {components.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.name}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-md transition-colors duration-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Profile Options */}
          <div>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center w-full rounded-md px-3 py-2 text-gray-700 hover:bg-indigo-50 transition-colors duration-300"
            >
              <FaUser className="w-4 h-4 mr-2" />
              User
              <FaAngleDown
                className={`w-4 h-4 ml-auto transform transition-all duration-300 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={` pl-6 transition-all duration-300 ${
                isProfileOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {profileOptions.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.name}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-md transition-colors duration-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
