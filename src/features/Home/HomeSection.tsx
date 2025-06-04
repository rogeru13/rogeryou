"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const affiliations = ["CMU", "PearAI", "Creator"];
const socialLinks = [
  { icon: <FaGithub />, url: "github.com/rogeru13" },
  { icon: <FaLinkedin />, url: "linkedin.com/in/roger-you-b09bb0282" },
  { icon: <FaInstagram />, url: "instagram.com/rojeru_" },
  { icon: <FaEnvelope />, url: "mailto:rogeryou@andrew.cmu.edu" },
];

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-24 bg-white">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto relative z-10">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl text-black mb-2 italic font-light">Hey! This is</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black leading-tight">
            Roger You
          </h1>
          <div className="flex space-x-2 mb-4 text-lg font-extrabold text-black">
            {affiliations.map((aff, idx) => (
              <React.Fragment key={aff}>
                <span>{aff}</span>
                {idx < affiliations.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex space-x-4 mt-4 mb-8 text-2xl text-black">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-neutral-500 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
          <div className="backdrop-blur-xl bg-white rounded-full p-1 shadow-2xl border border-black/10">
            <Image
              src="/profile.png"
              alt="Profile"
              width={290}
              height={290}
              className="rounded-full w-80 h-80 object-cover grayscale"
              priority
            />
          </div>
        </div>
      </div>
      <span
        onClick={() => {
          setTimeout(() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          }, 100);
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black hover:text-neutral-500 transition-colors text-4xl animate-bounce cursor-pointer"
      >
        &#8595;
      </span>
    </section>
  );
};

export default HomeSection;
