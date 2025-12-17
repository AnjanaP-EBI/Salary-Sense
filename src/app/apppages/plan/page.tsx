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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoMdAlert } from "react-icons/io";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { BsCalendarDateFill } from "react-icons/bs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { PiWarningCircleBold } from "react-icons/pi";
import { Pi } from "lucide-react";

type IncomeEntry = {
  id: string;
  name: string;
  amount: number;
  date?:Date;
  open?:boolean;
};

type ExpanceEntry = {
  id: string;
  name: string;
  amount: number;
  date?:Date;
  open?:boolean;
};

export default function PlanPage() {
  const [openIncome, setOpenIncome] = useState(false);
  const [incomeDate, setIncomeDate] = useState<Date | undefined>(undefined);
  const [incomeEntries, setIncomeEntries] = useState<IncomeEntry[]>([
    { id: "", name: "", amount: 0, date: undefined, },
  ]);
  const [openExpanse, setOpenExpanse] = useState(false);
  const [expanseDate, setExpanseDate] = useState<Date | undefined>(undefined);
  const [expanseType, setExpanseType] = useState("");
  const [expanseEntries, setExpanseEntries] = useState<IncomeEntry[]>([
    { id: "", name: "", amount: 0, date: undefined, },
  ]);
  const [selectStorage, setSelectStorage] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const currencies = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "LKR", name: "SriLankan Rupees" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "INR", name: "Indian Rupee" },
    { code: "BRL", name: "Brazilian Real" },
  ];

  const handleAddExpance = () => {
    //logic to add expance field
    const newExpanseEntry = {
      id: `out-${Date.now()}`,
      name: "",
      amount: 0,
      date: undefined,
      open: false,
    };
    setExpanseEntries([...expanseEntries, newExpanseEntry]);
  };
  const handleRemoveExpance = (expanseIndexToRemove:number) => {
    //logic to remove expance field
    setExpanseEntries(prev => (prev.filter((_,i) => i !== expanseIndexToRemove)))
  };
  const handleAddIncome = () => {
    //logic to add income field
    const newIncomeEntry = {
      id: `in-${Date.now()}`,
      name: "",
      amount: 0,
      date: undefined,
      open: false,
    };
    setIncomeEntries([...incomeEntries, newIncomeEntry]);
  };
  const handleRemoveIncome = (incomeIndexToRemove:number) => {
    //logic to remove income field
    setIncomeEntries(prev => prev.filter((_, i) => i !== incomeIndexToRemove));
    
  };

  return (
    <div className="flex h-full w-[1100px] items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-[682px] w-full flex-col items-center bg-white rounded-b-xl border border-b-gray-300  sm:items-start darl:bg-black">
        {/* header */}
        <div className="mx-8 mt-14">
          <h1 className="text-md font-medium ">Build Your Plan</h1>
        </div>
        <div className="w-full px-8 flex justify-center">
          <Separator className="my-1 " />
        </div>
        {/* form */}
        <ScrollArea className="w-full h-[480px] mt-5">
        <div className="w-full pl-8 gap-3 pt-8 flex flex-col justify-start">
          {/* curruncy */}
          <div className="flex flex-row w-full items-center gap-5 text-xs">
            <div className="w-1/5">Preferred Currency</div>
            <div className="w-1/4">
              <Select
                value={selectedCurrency}
                onValueChange={(v) => setSelectedCurrency(v)}
              >
                <SelectTrigger className="w-full h-8 border rounded-md">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center ">
                  <SelectGroup>
                    {currencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Monthly intendable saving percentage */}
          <div className="flex flex-row w-full gap-5 items-center text-xs">
            <div className="w-1/5">Least percentage of Saving</div>
            <div className="w-1/4 flex flex-row gap-2 items-center">
              <Input />%
            </div>
            <div className="flex flex-row text-[10px] text-blue-950 gap-1 items-center ">
              <IoMdAlert size={15} />
              Least percentage User needs to save from monthly Income
            </div>
          </div>
          {/* ttl blnce */}
          <div className="flex flex-row w-full gap-5 items-center text-xs">
            <div className="w-1/5">Current Total Balance</div>
            <div className="w-1/4">
              <Input />
            </div>
          </div>
          {/* monthly income */}
          <div className="flex flex-row w-full gap-5 items-center text-xs">
            <div className="w-1/5">Monthly salary</div>
            <div className="w-1/4">
              <Input />
            </div>
          </div>
          {/* other income */}
          <div className="flex flex-col gap-3">
            {incomeEntries.map((incomeEntry, incomeIndex) => (
              <div
                key={incomeEntry.id}
                className="flex flex-row w-full gap-5 items-center text-xs"
              >
                <div className="w-1/5">Other Monthly Incomes</div>
                <div className="w-1/4">
                  <Input placeholder="Income Name" />
                </div>
                <div className="w-1/8">
                  <Input placeholder="Amount" />
                </div>
                <div className="w-1/8">
                  <Popover open={incomeEntry.open} 
                  onOpenChange={(isopen) => {
                    const newIncomeEntries = [...incomeEntries];
                    newIncomeEntries[incomeIndex].open = isopen;
                    setIncomeEntries(newIncomeEntries); 
                  }}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between text-gray-500 font-light"
                      >
                        {incomeDate
                          ? incomeDate.toLocaleDateString()
                          : "Select date"}
                        <BsCalendarDateFill />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={incomeEntry.date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          const newIncomeEntries = [...incomeEntries];
                          newIncomeEntries[incomeIndex].date = date;
                          setIncomeEntries(newIncomeEntries);
                          
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                {/* Plus minus buttons outside the map */}
                {incomeIndex === incomeEntries.length - 1 && (
                <HiPlusCircle
                  size={20}
                  className="text-green-600 cursor-pointer"
                  onClick={handleAddIncome}
                />
                )}
                
                {incomeEntries.length > 1 && (
                  < HiMinusCircle
                  size={20}
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleRemoveIncome(incomeIndex)}
                
                />)}
                
              </div>
            ))}
          </div>
          {/* monthly expense */}
          <div className="flex flex-col w-full gap-3 items-center text-xs">
            {expanseEntries.map((expanseEntry, expanseIndex) => (
              <div key={expanseEntry.id} className="flex flex-row w-full gap-5 items-center text-xs">
            <div className="w-1/5">Monthly Expances</div>
            <div className="w-1/4">
              <Input placeholder="Expanse Name" />
            </div>
            <div className="w-1/8">
              <Input placeholder="Amount" />
            </div>
            <div className="w-1/8">
              <Popover open={expanseEntry.open} onOpenChange={(isopen) => {
                const newExpanseEntries = [...expanseEntries];
                newExpanseEntries[expanseIndex].open = isopen;
                setExpanseEntries(newExpanseEntries);
              }}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-full justify-between text-gray-500 font-light"
                  >
                    {expanseDate
                      ? expanseDate.toLocaleDateString()
                      : "Select date"}
                    <BsCalendarDateFill />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={expanseEntry.date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      const newExpanseEntries = [...expanseEntries];
                      newExpanseEntries[expanseIndex].date = date;
                      setExpanseEntries(newExpanseEntries);
                      setOpenExpanse(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="w-1/8">
              <Select
                value={expanseType}
                onValueChange={(s) => setExpanseType(s)}
              >
                <SelectTrigger className="w-full h-8 border rounded-md">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center ">
                  <SelectGroup>
                    <SelectItem value="housing" key="housing">
                      Housing
                    </SelectItem>
                    <SelectItem value="food" key="food">
                      Food
                    </SelectItem>
                    <SelectItem value="transport" key="transport">
                      Transport
                    </SelectItem>
                    <SelectItem value="other" key="other">
                      Other
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            { expanseIndex === expanseEntries.length - 1 && (
            <HiPlusCircle
              size={20}
              className="text-green-600 cursor-pointer"
              onClick={handleAddExpance}
            />)}
            { expanseEntries.length  > 1 && (
            <HiMinusCircle
              size={20}
              className="text-red-600 cursor-pointer"
              onClick={() => handleRemoveExpance(expanseIndex)}
            />)}
          </div>
  ))}
        </div>
        </div></ScrollArea>
        {/* submit button */}
        <div className="w-full flex px-8 justify-end mt-10 mb-5 gap-2">
          <Button
            variant="outline"
            className=" hover:bg-gray-200 text-blue-600 text-sm h-8 px-6 shadow-md rounded-sm"
          >
            Cansel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-800 text-white text-sm h-8 px-6 shadow-lg rounded-sm" onClick={() => toast("Plan Saved!", {icon:<PiWarningCircleBold className="text-green"/>})}>
            Save
          </Button>
        </div>
      </main>
    </div>
  );
}
