// src/app/page.tsx
import React from "react";
import InstagramPhoneEmbed from "./InstagramPhoneEmbed";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto pt-8 pb-16 px-2 md:px-6 flex-1">
        {/* Left: Instagram Reel embed in iPhone frame */}
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <InstagramPhoneEmbed />
        </div>
        {/* Right: Name, bio */}
        <div className="flex-1 flex flex-col justify-center items-start md:pl-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Roger You</h1>
          <div className="space-y-3 text-sm text-black/60 mb-6">
            <div>student @ <a href="https://www.cmu.edu/" className="text-emerald-600 relative group" target="_blank" rel="noopener noreferrer">Carnegie Mellon University<span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" aria-hidden="true" /></a> studying CS & ML.</div>
            <div style={{ padding: '.05rem' }}></div>
            <div>i&#39;ve worked on products at <a href="https://www.linkedin.com/company/trypearai/" className="text-emerald-600 relative group" target="_blank" rel="noopener noreferrer">PearAI<span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" aria-hidden="true" /></a> (YC24) and <a href="https://www.springcarnival.org/" className="text-emerald-600 relative group" target="_blank" rel="noopener noreferrer">Spring Carnival<span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" aria-hidden="true" /></a>, and conducted research at <a href="https://research-innovation.ncssm.edu/research-communication/durham-summer-ri-showcase/srip-showcase-2023/all-2023-projects" className="text-emerald-600 relative group">NC State<span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" aria-hidden="true" /></a> and <a href="https://openreview.net/forum?id=nWCsJdKoUs" className="text-emerald-600 relative group">Algoverse AI<span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" aria-hidden="true" /></a>. </div>
            <div style={{ padding: '.05rem' }}></div>
            <div>interested in startups, tech, and <a href="https://www.instagram.com/rojeru_/" className="text-emerald-600 relative group" target="_blank" rel="noopener noreferrer">content<span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" aria-hidden="true" /></a> (90k+)</div>
          </div>
        </div>
      </div>
      {/* Footer with links */}
      <footer className="w-full py-6 text-center border-t border-gray-100">
        <div className="flex justify-center gap-8 text-sm">
          {[
            { href: "https://linkedin.com/in/roger-you-b09bb0282", label: "LinkedIn" },
            { href: undefined, label: "Resume" },
            { href: "https://github.com/rogeru13", label: "GitHub" },
            { href: "mailto:rogeryou@andrew.cmu.edu", label: "Email" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`relative text-emerald-600 transition-colors duration-200 group ${!link.href ? 'cursor-not-allowed pointer-events-none opacity-50' : ''}`}
              target={link.href?.startsWith('http') ? "_blank" : undefined}
              rel={link.href?.startsWith('http') ? "noopener noreferrer" : undefined}
            >
              <span className="relative z-10">{link.label}</span>
              <span
                className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}