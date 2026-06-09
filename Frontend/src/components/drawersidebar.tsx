import { Switch } from "./ui/switch";
import { MdSpaceDashboard } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoSyncCircle } from "react-icons/io5";
import { TbBusinessplan } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoBugSharp } from "react-icons/io5";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { LuBrainCircuit } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface DrawerSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DrawerSidebar({ open, onOpenChange }: DrawerSidebarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed z-50 top-12 left-1/2 -translate-x-1/2
                  w-screen h-screen
                  pointer-events-none`}
    >
      {/* drawyer sidebar */}
      <div
        className={`absolute left-0 w-70 h-[95%]  bg-white dark:bg-[#3B3B3B] shadow-lg border-r
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    pointer-events-auto z-50`}
      >
        {" "}
        <div className="flex flex-col items-between justify-between h-full">
          {/*menu items */}
          <div>
            <Link href="/apppages/dashboard"><div className="p-4 flex flex-row items-center gap-5 hover:bg-blue-50 dark:hover:bg-gray-600 dark:hover:text-white hover:border-r-5 hover:border-blue-600 text-lg">
             <MdSpaceDashboard size={22}/>Dashboard
            </div></Link> 
            <Link href="/apppages/plan"><div className="p-4 flex flex-row items-center gap-5 hover:bg-blue-50 hover:border-r-5  dark:hover:bg-gray-600 dark:hover:text-white hover:border-blue-600 text-lg">
              <TbBusinessplan size={22}/>Plan
            </div></Link>
            <Link href="/apppages/settings"><div className="p-4 flex flex-row items-center gap-5 hover:bg-blue-50 hover:border-r-5  dark:hover:bg-gray-600 dark:hover:text-white hover:border-blue-600 text-lg">
             <IoMdSettings size={22}/> Settings
            </div></Link>
            <Link href="/apppages/aiCompanion"><div className="p-4 flex flex-row items-center gap-5 hover:bg-blue-50 hover:border-r-5  dark:hover:bg-gray-600 dark:hover:text-white hover:border-blue-600 text-lg"><LuBrainCircuit  size={22}/>
              AI Companion
            </div></Link>
            <Link href="/apppages/reportBug"><div className="p-4 flex flex-row items-center gap-5 hover:bg-blue-50 hover:border-r-5  dark:hover:bg-gray-600 dark:hover:text-white hover:border-blue-600 text-lg"><IoBugSharp size={22}/>
              Report a Bug
            </div></Link>
            <Separator/>
            <div className="px-4 pt-6 items-center justify-center gap-3 flex flex-row  ">
              <div className="w-3/4 flex flex-row items-center gap-5 text-lg"><MdDarkMode size={22}/>Dark Mode</div>
              <div className="w-1/4 pt-2">
                <Switch id="darkMode" checked={theme === "dark"} onCheckedChange={(checked) => {setTheme(checked? "dark" :"light" )}} />
              </div>
            </div>
            <div className="px-4 pt-6 items-center justify-center gap-3 flex flex-row">
              <div className="w-3/4 flex flex-row items-center gap-5 text-lg"><IoSyncCircle size={22}/>Auto Sync</div>
              <div className="w-1/4 pt-2">
                <Switch id="autoSync" />
              </div>
            </div>
            
          </div>

          {/*footer */}
          <div>
            <div className="text-[12px] text-gray-600 border-b border-gray-400 mx-2 flex flex-col dark:text-gray-100 items-center justify-center pb-2"><h1>Designed and built by Anjana Prabhashwara</h1></div>
            <Link href="/auth/signin"><div className="flex flex-col justify-center items-center py-[6%] w-full  text-md font-semibold hover:bg-blue-100 dark:hover:bg-gray-600" 
            // onClick={() => setWindowClose(true)}
            >Sign Out</div></Link>
          </div>

        </div>
      </div>
      {/*backdrop */}
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-b-xl
                  bg-black/20 transition-opacity duration-300 ease-in-out
                    ${
                      open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    } z-40`}
        onClick={() => onOpenChange(false)}
      ></div>
    </div>
  );
}
