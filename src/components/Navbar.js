"use client"; // Ensure the component is treated as a client-side component

import { useEffect } from 'react';

const Navbar = () => {
  // Smooth scroll function
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the fixed navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Portofolio by Azhar Syarif</div>
        <ul className="flex space-x-4">
          <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:underline">About</a></li>
          <li><a href="#experience" onClick={(e) => handleScroll(e, '#experience')} className="hover:underline">Experience</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')} className="hover:underline">Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:underline">Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
