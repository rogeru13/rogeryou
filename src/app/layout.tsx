import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roger You",
  description: "Personal website of Roger You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Georgia, serif' }}>
        {children}
      </body>
    </html>
  );
}
