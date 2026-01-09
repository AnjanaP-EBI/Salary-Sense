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
import { useApp } from "@/context/AppContext";
import { set } from "date-fns";


type IncomeEntry = {
  id: string;
  name: string;
  amount: number;
  date?: Date;
  open?: boolean;
};

type ExpanceEntry = {
  id: string;
  name: string;
  amount: number;
  date?: Date;
  open?: boolean;
};

export default function PlanPage() {
  const [openIncome, setOpenIncome] = useState(false);
  const [incomeDate, setIncomeDate] = useState<Date | undefined>(undefined);
  const [incomeEntries, setIncomeEntries] = useState<IncomeEntry[]>([
    { id: "", name: "", amount: 0, date: undefined },
  ]);
  const [openExpanse, setOpenExpanse] = useState(false);
  const [expanseDate, setExpanseDate] = useState<Date | undefined>(undefined);
  const [expanseType, setExpanseType] = useState("");
  const [expanseEntries, setExpanseEntries] = useState<IncomeEntry[]>([
    { id: "", name: "", amount: 0, date: undefined },
  ]);
  const [selectStorage, setSelectStorage] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const { setCurrency,setSavingPercentage } = useApp();
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

  const [intendSavingPercentage, setIntendSavingPercentage] = useState(0);

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
  const handleRemoveExpance = (expanseIndexToRemove: number) => {
    //logic to remove expance field
    setExpanseEntries((prev) =>
      prev.filter((_, i) => i !== expanseIndexToRemove)
    );
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
  const handleRemoveIncome = (incomeIndexToRemove: number) => {
    //logic to remove income field
    setIncomeEntries((prev) =>
      prev.filter((_, i) => i !== incomeIndexToRemove)
    );
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-full w-full flex-col items-center bg-white border border-b-gray-300  sm:items-start dark:bg-[#242424]">
        {/* header */}
        <div className="mx-8 mt-14">
          <h1 className="text-2xl font-medium ">Build Your Plan</h1>
        </div>
        <div className="w-full px-8 flex justify-center">
          <Separator className="my-1 " />
        </div>
        {/* form */}
        <ScrollArea className="w-full h-[480px] mt-5">
          <div className="w-full pl-8 gap-5 pt-8 flex flex-col justify-start">

            {/* Monthly intendable saving percentage */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5 text-lg">Least percentage of Saving</div>
              <div className="w-1/4 flex flex-row gap-2 text-lg items-center">
                <Input className="h-12" 
                  value={intendSavingPercentage}
                  onChange={(e) => setIntendSavingPercentage(Number(e.target.value))}
                />%
              </div>
              <div className="flex flex-row text-gray-500 dark:text-[#adadad] gap-1 items-center text-[15px]">
                <IoMdAlert size={20} />
                Least percentage User needs to save from monthly Income
              </div>
            </div>
            {/* ttl blnce */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5 text-lg">Current Total Balance</div>
              <div className="w-1/4">
                <Input className="h-12" />
              </div>
            </div>
            {/* monthly income */}
            <div className="flex flex-row w-full gap-5 items-center text-xs">
              <div className="w-1/5 text-lg">Monthly salary</div>
              <div className="w-1/4">
                <Input className="h-12" />
              </div>
            </div>
            {/* other income */}
            <div className="flex flex-col gap-3">
              {incomeEntries.map((incomeEntry, incomeIndex) => (
                <div
                  key={incomeEntry.id}
                  className="flex flex-row w-full gap-5 items-center text-xs"
                >
                  <div className="w-1/5 text-lg">Other Monthly Incomes</div>
                  <div className="w-1/4">
                    <Input className="h-12" placeholder="Income Name" />
                  </div>
                  <div className="w-1/8">
                    <Input className="h-12" placeholder="Amount" />
                  </div>
                  <div className="w-1/6">
                    <Popover
                      open={incomeEntry.open}
                      onOpenChange={(isopen) => {
                        const newIncomeEntries = [...incomeEntries];
                        newIncomeEntries[incomeIndex].open = isopen;
                        setIncomeEntries(newIncomeEntries);
                      }}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className="w-full justify-between h-12 text-gray-500 font-light"
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
                      size={25}
                      className="text-green-600 cursor-pointer"
                      onClick={handleAddIncome}
                    />
                  )}

                  {incomeEntries.length > 1 && (
                    <HiMinusCircle
                      size={25}
                      className="text-red-600 cursor-pointer"
                      onClick={() => handleRemoveIncome(incomeIndex)}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* monthly expense */}
            <div className="flex flex-col w-full gap-3 items-center text-xs">
              {expanseEntries.map((expanseEntry, expanseIndex) => (
                <div
                  key={expanseEntry.id}
                  className="flex flex-row w-full gap-5 items-center text-xs"
                >
                  <div className="w-1/5 text-lg">Monthly Expances</div>
                  <div className="w-1/4">
                    <Input className="h-12" placeholder="Expanse Name" />
                  </div>
                  <div className="w-1/8">
                    <Input className="h-12" placeholder="Amount" />
                  </div>
                  <div className="w-1/6">
                    <Popover
                      open={expanseEntry.open}
                      onOpenChange={(isopen) => {
                        const newExpanseEntries = [...expanseEntries];
                        newExpanseEntries[expanseIndex].open = isopen;
                        setExpanseEntries(newExpanseEntries);
                      }}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className="w-full h-12 justify-between text-gray-500 font-light"
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
                  <div className="w-[15%]">
                    <Select
                      value={expanseType}
                      onValueChange={(s) => setExpanseType(s)}
                    >
                      <SelectTrigger size="lg" className="w-full h-12 border rounded-md">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-700 rounded-lg w-full py-3 gap-2 shadow-lg border items-center ">
                        <SelectGroup>
                          <SelectItem value="housing" key="housing" className="text-lg">
                            Housing
                          </SelectItem>
                          <SelectItem value="food" key="food" className="text-lg">
                            Food
                          </SelectItem>
                          <SelectItem value="transport" key="transport" className="text-lg">
                            Transport
                          </SelectItem>
                          <SelectItem value="other" key="other" className="text-lg">
                            Other
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {expanseIndex === expanseEntries.length - 1 && (
                    <HiPlusCircle
                      size={25}
                      className="text-green-600 cursor-pointer"
                      onClick={handleAddExpance}
                    />
                  )}
                  {expanseEntries.length > 1 && (
                    <HiMinusCircle
                      size={25}
                      className="text-red-600 cursor-pointer"
                      onClick={() => handleRemoveExpance(expanseIndex)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
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
            onClick={() => {

              setCurrency(selectedCurrency);
              setSavingPercentage(intendSavingPercentage);
              toast.success("Plan saved successfully!");
              }}
            
          >
            Save
          </Button>
        </div>
      </main>
    </div>
  );
}
