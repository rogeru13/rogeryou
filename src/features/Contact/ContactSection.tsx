import React from "react";

const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="w-full bg-black text-white py-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="text-lg opacity-80 mb-2">Email: <a href="mailto:rogeryou@andrew.cmu.edu" className="underline hover:opacity-60">rogeryou@andrew.cmu.edu</a></div>
      <div className="text-sm opacity-50">&copy; {new Date().getFullYear()} Roger You. All rights reserved.</div>
    </footer>
  );
};

export default ContactSection;
