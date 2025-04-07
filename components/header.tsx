"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResponsiveAppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const path=usePathname();
  const [activeItem, setActiveItem] = useState(path);
  const menuItems = [{key:"Home",value:"/"}, {key:"About",value:"/about"}, {key:"Career",value:"/career"}];

  useEffect(()=>{
    
  },[])

  return (
    <nav className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] bg-opacity-90 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="https://www.matrixstride.com/images/logo-matrixstride.png"
            alt="Logo"
            width={135}
            height={50}
            priority
            className="h-12 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.value}
              onClick={() => setActiveItem(item.value)}
              className={`px-10 py-2 rounded-lg font-medium relative transition-all duration-300 ${
                activeItem === item.key
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.key}
              {activeItem === item.value && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white w-4/5 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Animated Slide Down) */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-2">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.value}
              onClick={() => {
                setActiveItem(item.value);
                setIsOpen(false);
              }}
              className={`block px-6 py-3 text-center text-lg font-medium relative transition-colors duration-200 ${
                activeItem === item.value
                  ? "text-white bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.key}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
