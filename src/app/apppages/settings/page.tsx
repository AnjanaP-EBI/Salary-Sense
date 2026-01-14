"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppProvider, useApp } from "@/context/AppContext";
import { toast } from "sonner";

type Language = "en" | "si";

export default function SettingsPage() {
  const [selectStorage, setSelectStorage] = React.useState<string>("local");
  const userEmail = "yourmail@gmail.com"; //fetch from user context or auth context
  const passwordPlaceholder = "password"; //fetch from user context or auth context

  const [selectedCurrency, setSelectedCurrency] = useState("$");
    const { setCurrency } = useApp();
    const currencies = [
      { code: "USD", symbol: "$ ", name: "United States Dollar" },
      { code: "EUR", symbol: "€ ", name: "Euro" },
      { code: "GBP", symbol: "£ ", name: "British Pound" },
      { code: "JPY", symbol: "¥ ", name: "Japanese Yen" },
      { code: "LKR", symbol: "Rs.", name: "SriLankan Rupees" },
      { code: "AUD", symbol: "$ ", name: "Australian Dollar" },
      { code: "CAD", symbol: "$ ", name: "Canadian Dollar" },
      { code: "CHF", symbol: "Fr. ", name: "Swiss Franc" },
      { code: "CNY", symbol: "¥ ", name: "Chinese Yuan" },
      { code: "INR", symbol: "₹ ", name: "Indian Rupee" },
      { code: "BRL", symbol: "R$ ", name: "Brazilian Real" },
    ];

    
  function setOpen(open: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-full w-full flex-col items-center bg-white  border border-b-gray-300  sm:items-start  dark:bg-[#242424]">
        {/* settings header */}
        <ScrollArea className="w-full h-full ">
          <div className="mx-8 mt-14">
            <h1 className="text-2xl font-medium ">
              Settings
            </h1>
          </div>
          <div className="w-full px-8 flex justify-center">
            <Separator className="my-1 " />
          </div>
          {/* form */}
          <div className="w-full pl-8 gap-3 pt-8 flex flex-col justify-start">
            {/* saving location */}
            <div className="flex flex-row w-full gap-5 items-center text-lg">
              <div className="w-1/5">
               Data Saving location
              </div>
              <div className="w-1/4">
                <Select
                  value={selectStorage}
                  onValueChange={(s) => setSelectStorage(s)}
                >
                  <SelectTrigger size="lg" className="w-full h-12 border rounded-md">
                    <SelectValue placeholder="Select Saving Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border text-lg items-center ">
                    <SelectGroup>
                      <SelectItem value="local" key="local" className="text-lg">
                       Local Storage
                      </SelectItem>
                      <SelectItem value="cloud" key="cloud" className="text-lg">
                        Cloud Storage
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* currency */}
            <div className="flex flex-row w-full items-center gap-5 text-xs">
              <div className="w-1/5 text-lg">Preferred Currency</div>
              <div className="w-1/4">
                <Select
                  value={selectedCurrency}
                  onValueChange={(v) => setSelectedCurrency(v)}
              
                >
                  <SelectTrigger size="lg" className="w-full h-12 border rounded-md">
                    <SelectValue placeholder="Select currency" className="text-lg"/>
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center text-lg ">
                    <SelectGroup>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.symbol} className="text-lg">
                          {currency.code} - {currency.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Language */}
            {/* <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5 text-lg">
                {lang === "si" ? "භාෂාව" : "Language"}
              </div>
              <div className="w-1/4">
                <Select
                  value={lang}
                  onValueChange={(v) => setLang(v as "en" | "si")} 
                >
                  <SelectTrigger size="lg" className="w-full h-12 border rounded-md">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center ">
                    <SelectGroup>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="si">සිංහල</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div> */}
          </div>
          {/* submit button */}
        <div className="w-full flex px-8 justify-end items-baseline mt-10 mb-5 gap-2">
          <Button
            variant="outline"
            className=" hover:bg-gray-200 text-blue-600 text-sm shadow-md rounded-sm"
            size="lg"
          >
            Cansel
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-800 text-white text-sm  shadow-lg rounded-sm"
            size="lg"
            onClick={() =>

              setCurrency(selectedCurrency)
              }
            
          >
            Save
          </Button>
        </div>
          {/* Privacy And Security */}
          <div className="mx-8 mt-10">
            <h1 className="text-2xl font-medium ">
             Privacy and Security
            </h1>
          </div>
          <div className="w-full px-8 flex justify-center">
            <Separator className="my-1 " />
          </div>
          {/* form */}
          <div className="w-full pl-8 gap-3 pt-8 flex flex-col justify-start">
            {/* change password */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5 text-lg">Password
              </div>
              <div className="w-1/3 items-center flex flex-row">
                <Input type="password" value={passwordPlaceholder} className="w-4/5 h-12"/>
                <Dialog>
                  <DialogTrigger className="ml-2 h-8 w-24 rounded-md px-4 text-lg  bg-blue-800 text-white">
                    Reset
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-medium text-2xl">
                        Add New password
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-row  mt-4 w-full items-center">
                      <div className="w-2/3 flex flex-col gap-3">
                        <Input placeholder="New password" className="h-12" />
                        <Input placeholder="Confirm New Password" className="h-12"/>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-end ">
                      <Button
                        size="lg"
                        className=" mt-4 bg-blue-800 hover:bg-blue-900"
                        onClick={() => toast("password updated Successfully")}
                      >
                        Update
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            {/* E-mail */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5 text-lg">Email</div>
              <div className="w-1/3 flex flex-row items-center">
                <Input defaultValue={userEmail} className="4/5 h-12"/>
                <Dialog>
                  <DialogTrigger className="ml-2 h-8 w-1/5 rounded-md px-4 text-lg bg-blue-800 text-white">
                    Change
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-medium text-2xl">
                        Add New Email
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-row  mt-4 w-full items-center">
                      <div className="w-2/3 flex flex-col gap-3">
                        <Input placeholder="New Email" className="h-12" />
                        <Input placeholder="Confirm New Email" className="h-12"/>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-end ">
                      <Button
                        className=" mt-4 bg-blue-800 hover:bg-blue-900"
                        onClick={() => toast("Email updated Successfully")}
                        size="lg"
                      >
                        Update
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            {/* jhjhjh */}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
