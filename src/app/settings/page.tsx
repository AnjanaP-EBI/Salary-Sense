"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [selectStorage, setSelectStorage] = React.useState<string>("local");

  return (
    <div className="flex h-full w-[1100px] items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-full w-full flex-col items-center bg-white rounded-b-xl border border-b-gray-300  sm:items-start darl:bg-black">
        {/* settings header */}
        <ScrollArea className="w-full h-[480px] mt-5">
          <div className="mx-8 mt-10">
            <h1 className="text-md font-medium ">Settings</h1>
          </div>
          <div className="w-full px-8 flex justify-center">
            <Separator className="my-1 " />
          </div>
          {/* form */}
          <div className="w-full pl-8 gap-3 pt-8 flex flex-col justify-start">
            {/* saving location */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5">Data Saving location</div>
              <div className="w-1/4">
                <Select
                  value={selectStorage}
                  onValueChange={(s) => setSelectStorage(s)}
                >
                  <SelectTrigger className="w-full h-8 border rounded-md">
                    <SelectValue placeholder="Select Saving Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center ">
                    <SelectGroup>
                      <SelectItem value="local" key="local">
                        Local Storage
                      </SelectItem>
                      <SelectItem value="cloud" key="cloud">
                        Cloud Storage
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* saving location */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5">Data Saving location</div>
              <div className="w-1/4">
                <Select
                  value={selectStorage}
                  onValueChange={(s) => setSelectStorage(s)}
                >
                  <SelectTrigger className="w-full h-8 border rounded-md">
                    <SelectValue placeholder="Select Saving Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center ">
                    <SelectGroup>
                      <SelectItem value="local" key="local">
                        Local Storage
                      </SelectItem>
                      <SelectItem value="cloud" key="cloud">
                        Cloud Storage
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Privacy And Security */}
          <div className="mx-8 mt-10">
            <h1 className="text-md font-medium ">Privacy and Security</h1>
          </div>
          <div className="w-full px-8 flex justify-center">
            <Separator className="my-1 " />
          </div>
          {/* form */}
          <div className="w-full pl-8 gap-3 pt-8 flex flex-col justify-start">
            {/* change password */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5">Password</div>
              <div className="w-1/3 items-center flex flex-row">
                <Input type="password" className="w-3/4"/> <Button className="ml-2 h-8 px-4 text-xs bg-blue-800">Reset</Button>
              </div>   
            </div>
            {/* E-mail */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5">Email</div>
              <div className="w-1/4">
                <Input type="email" className="w-full"/>
              </div>
            </div>
            {/* jhjhjh */}           
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
