"use client";
import React, { useEffect } from "react";

export default function InstagramPhoneEmbed() {
  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-[280px] h-[580px] bg-black rounded-[40px] p-3 shadow-2xl">
      {/* iPhone notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-[20px] z-10"></div>
      {/* Screen content */}
      <div
        className="w-full h-full bg-white rounded-[32px] overflow-hidden flex items-center justify-center"
        style={{ padding: 0, position: "relative" }}
      >
        <div
          className="w-full h-full overflow-hidden"
          style={{
            position: "absolute",
            top: "-30px", // Move embed up to hide header
            left: 0,
            transform: "translateX(-20px)",
            width: "110%",
            height: "700px", // Make sure the video fills the area
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
          <div
            style={{ width: "100%", height: "700px" }}
            dangerouslySetInnerHTML={{
              __html: `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/C_U2xJ2u1w6/' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0; max-width:540px; min-width:200px; padding:0; width:100%;'></blockquote>`
            }}
          />
        </div>
      </div>
    </div>
  );
} 