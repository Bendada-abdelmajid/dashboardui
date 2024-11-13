import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";


const  geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fine Flex",
  description: "business dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased w-screen overflow-x-hidden  `}
      >
       
         
      
          {children}
      
      </body>

    </html>
  );
}
