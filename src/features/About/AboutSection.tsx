import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const sections = [
  {
    icon: <FaGraduationCap className="text-2xl text-black" />, 
    bg: "bg-white border border-white/10", 
    title: "Education & Research", 
    content: (
      <>
        I'm a First Year <a href="#" className="text-black hover:text-neutral-500 transition-colors">Carnegie Mellon University</a>
      </>
    )
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden bg-black">
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white rounded-3xl p-12 shadow-2xl border border-white/10 mb-12 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center text-black mb-8">About Me</h2>
          <div className="flex items-start gap-8 w-full">
            <div className={`mt-1 w-20 h-20 rounded-2xl flex items-center justify-center ${sections[0].bg} text-black shadow-lg backdrop-blur-md border border-white/10`}>
              {sections[0].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6 text-black flex items-center">
                {sections[0].title}
              </h3>
              <div className="text-black text-xl leading-relaxed space-y-4">
                {sections[0].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
