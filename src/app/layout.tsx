'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AiOutlineFullscreen, AiOutlineMenu, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const handleMenu = () => {
    console.log("Menu clicked");
  };
  const handleMinimize = () => {
    console.log("Minimize clicked");
  };
  const handlerestore = () => {
    console.log("Restore clicked");
  };
  const handleClose = () => {
    console.log("Close clicked");
  };
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-full w-full items-center justify-center bg-zinc-50 font-sans">
          <main className="flex h-[720px] w-[1100px] flex-col items-center bg-white rounded-xl border  bg-whitelack sm:items-start darl:bg-black">
        <header className="justify justify-between flex items-center w-[1100px] h-12 bg-[#0839CC] rounded-t-xl">
                  <div className="flex h-full items-center items-row">
                    <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center rounded-tl-xl">
                      <AiOutlineMenu size={20} color="white" onClick={handleMenu} />
                    </div>
                    <div className="flex flex-row m-2 items-center text-white">
                      <div className="font-semibold">Salary Sence</div>
                      <div>-Your personal income planner</div>
                    </div>
                  </div>
                  <div className="flex items justify-end items-center my-2  w-45 h-full">
                    <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center ">
                      <AiOutlineMinus
                        size={20}
                        color="white"
                        onClick={handleMinimize}
                      />
                    </div>
                    <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center ">
                      <AiOutlineFullscreen
                        size={20}
                        color="white"
                        onClick={handlerestore}
                      />
                    </div>
                    <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center rounded-tr-xl">
                      <AiOutlineClose size={20} color="white" onClick={handleClose} />
                    </div>
                  </div>
                </header>
        {children}</main></div>
      </body>
    </html>
  );
}
