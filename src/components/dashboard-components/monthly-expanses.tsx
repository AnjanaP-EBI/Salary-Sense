
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "../ui/input";
import { useState } from "react";

interface dashboardData {
  newExpanse: string
  expanseAmount: number
}

export function MonthlyExpanses() {

    const handleExpanseInput = () => {}
    const handleAmountInput = () => {}


    const [newExpanse, setnewExpanse] = useState();
    const [expanseAmount, setExpanseAmont] = useState();
    const [dashboardData, setDashboardData] = useState<dashboardData>({
      newExpanse: "",
      expanseAmount: 0
    })


    return (
      <div className="w-full h-full justify-between rounded-xl">
        <div className="w-full h-7 pl-4 pt-1.5 items-center justify-center  bg-gray-300 rounded-t-xl">
          <h1 className="font-medium text-xs">This month Expanses</h1>
        </div>
        <div className="border">
        <div className="  w-full h-124">
          <ScrollArea></ScrollArea>  
        </div>
        
        </div>
        <div className="h-7 bg-gray-300 rounded-b-xl flex flex-row justify-between">
          <h1 className="pl-3 pt-1.5 text-xs font-medium">Total Expanses</h1>
          <h2 className="pr-3 pt-1.5 text-xs font-medium">700000</h2>
        </div>
      </div>
    );
}