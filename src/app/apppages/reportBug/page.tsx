"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PiWarningCircleBold } from "react-icons/pi";
import { Textarea } from "@/components/ui/textarea";



export default function PlanPage() {

  const [selectedPage, setSelectedPage] = useState("");
  const pages = [
    { code: "dashboard", name: "Dashboard" },
    { code: "plan", name: "Plan" },
    { code: "settings", name: "Settings" },
    { code: "loggin", name: "Log in" },
    { code: "signin", name: "Sign in" },
    { code: "other", name: "Other" },
  ];


  return (
    <div className="flex h-full w-[1100px] items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-[682px] w-full flex-col items-center bg-white rounded-b-xl border border-b-gray-300  sm:items-start darl:bg-black">
        {/* header */}
        <div className="mx-8 mt-10">
          <h1 className="text-md font-medium ">Report a Bug</h1>
        </div>
        <div className="w-full px-8 flex justify-center">
          <Separator className="my-1 " />
        </div>
        {/* form */}
        <div className="w-full pl-8 gap-3 pt-8 flex flex-col justify-start">
          
          {/* your email */}
          <div className="flex flex-row w-full gap-5 items-center text-xs">
            <div className="w-1/5">Your Email</div>
            <div className="w-2/4 flex flex-row gap-2 items-center">
              <Input />
            </div>
          </div>
          {/* Bug In */}
          <div className="flex flex-row w-full pt-6 items-center gap-5 text-xs">
            <div className="w-1/5">Bug in</div>
            <div className="w-2/4">
              <Select
                value={selectedPage}
                onValueChange={(v) => setSelectedPage(v)}
              >
                <SelectTrigger className="w-full h-8 border rounded-md">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center ">
                  <SelectGroup>
                    {pages.map((bugpage) => (
                      <SelectItem key={bugpage.code} value={bugpage.code}>
                        {bugpage.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* details */}
          <div className="flex flex-row w-full pt-2 gap-5 items-start text-xs">
            <div className="w-1/5">Describe the bug</div>
            <div className="w-1/2">
              <Textarea />
            </div>
          </div>

          {/* submit button */}
          <div className="w-full flex px-8 justify-end mt-10 mb-5 gap-2">
            <Button
              className="bg-blue-600 hover:bg-blue-800 text-white text-sm h-8 px-6 shadow-lg rounded-sm"
              onClick={() =>
                toast("Plan Saved!", {
                  icon: <PiWarningCircleBold className="text-green" />,
                })
              }
            >
              Submit
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
