"use client";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-8 py-3 ${
        hasScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg" 
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <ul className="flex space-x-8 text-base font-semibold text-black">
        <li><a href="#home" className="hover:text-neutral-500 transition-colors">Home</a></li>
        <li><a href="#projects" className="hover:text-neutral-500 transition-colors">Projects</a></li>
        <li><a href="#experience" className="hover:text-neutral-500 transition-colors">Experience</a></li>
        <li><a href="#research" className="hover:text-neutral-500 transition-colors">Research</a></li>
        <li><a href="#skills" className="hover:text-neutral-500 transition-colors">Skills</a></li>
        <li><a href="#content" className="hover:text-neutral-500 transition-colors">Content</a></li>
        <li><a href="#cv" className="hover:text-neutral-500 transition-colors">CV</a></li>
        <li><a href="#contact" className="hover:text-neutral-500 transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
