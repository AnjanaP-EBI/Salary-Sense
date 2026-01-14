'use client';
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import {
  AiOutlineFullscreen,
  AiOutlineMenu,
  AiOutlineMinus,
  AiOutlineClose,
} from "react-icons/ai";
import { Toaster } from "@/components/ui/sonner";
import { DrawerSidebar } from "@/components/drawersidebar";
import { AppProvider } from "@/context/AppContext";
import { getCurrentWindow } from "@tauri-apps/api/window";



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


  const [sidebarOpen, setSidebarOpen] =  useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-full w-full items-center justify-center font-sans">
          
          
            <main className="flex h-screen w-screen flex-col bg-white rounded-xl border  bg-whitelack sm:items-start darl:bg-black">
              
            <header data-tauri-drag-region className="justify justify-between flex items-center w-screen h-12 bg-linear-to-r from-blue-900 to-blue-500 border border-b shadow-lg ">
              <div className="flex h-full items-center items-row">
                <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center "
                onClick={() => {
                  if (sidebarOpen){
                    setSidebarOpen(false)
                  }
                else
                   setSidebarOpen(true)
                  }   
                }>
                  <AiOutlineMenu size={20} color="white" />
                </div>
                <div className="flex flex-row m-2 items-center text-white">
                  <div className="font-semibold">Salary Sence</div>
                  <div>-Your personal income planner</div>
                </div>
              </div>
              <div className="flex items justify-end items-center my-2  w-45 h-full">
                <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center "  onClick={() => getCurrentWindow().minimize()}>
                  <AiOutlineMinus
                    size={20}
                    color="white"
                   
                  />
                </div>
                <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center " onClick={() => getCurrentWindow().maximize}>
                  <AiOutlineFullscreen
                    size={20}
                    color="white"
                    
                  />
                </div>
                <div className="w-15 h-full hover:bg-[#002BAE] items-center flex justify-center " onClick={() => getCurrentWindow().close()}>
                  <AiOutlineClose
                    size={20}
                    color="white"
                    
                  />
                </div>
              </div>
            </header>
            <DrawerSidebar open={sidebarOpen} onOpenChange={setSidebarOpen}/>
            <div className="flex-1 w-full flex items-center justify-center">
              <AppProvider>
              {children}
              </AppProvider>
            </div>
          </main>
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
