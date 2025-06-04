import React from "react";

const ContentSection: React.FC = () => {
  return (
    <section id="content" className="min-h-screen flex flex-col justify-center items-center py-20 bg-white">
      <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white shadow-2xl p-12 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 text-black text-center">Content</h2>
        {/* Content goes here */}
        <div className="text-black text-lg text-center opacity-60">Content coming soon.</div>
      </div>
    </section>
  );
};

export default ContentSection;
