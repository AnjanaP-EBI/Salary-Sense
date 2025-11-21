"use client";
import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlineFullscreen,
} from "react-icons/ai";

import { SpendableIncome } from "@/components/dashboard-components/spendable-income";
import { MonthlyExpanses } from "@/components/dashboard-components/monthly-expanses";
import { UsagePercentage } from "@/components/dashboard-components/usage-percentage";
import { IncomeExpansesChart } from "@/components/dashboard-components/income-expanses-chart";
import { StatusCard } from "@/components/dashboard-components/status-card";
import { TotalBalance } from "@/components/dashboard-components/total-balance";
import { IncomeDecreaseChart } from "@/components/dashboard-components/income-decrease-chart";
import { OverallBalanceChart } from "@/components/dashboard-components/overall-balance-chart";
import { LastIncomeBalance } from "@/components/dashboard-components/last-income-balance";

export default function DashboardPage() {
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
    <div className="flex h-full w-full items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-full w-full flex-col items-center bg-white rounded-b-xl border  bg-whitelack sm:items-start darl:bg-black">
        
        {/* <header className="justify justify-between flex items-center w-[1100px] h-12 bg-[#0839CC] rounded-t-xl">
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
        </header> */}
        
        <div className="flex flex-row justify-between w-full p-4 gap-4">
          <div className="w-1/3 flex flex-col gap-4">
                 <SpendableIncome/>
                 <MonthlyExpanses/>
          </div>

          <div className="w-1/3 flex flex-col gap-4">
                 <UsagePercentage/>
                 <IncomeExpansesChart/>
                 <StatusCard 
                     thisMonthTotalExpanses={7000000}
                     intendAmount={1800000}
                     thisMonthTotalBalance={100000}
                     lastMonthTotalBalance={100000}
                     actualSavingPercentage={10}
                     intendSaving={5}/>
          </div>

          <div className="w-1/3 flex flex-col gap-4">
                 <TotalBalance/>
                 <LastIncomeBalance/>
                 <IncomeDecreaseChart/>
                 <OverallBalanceChart/>                 
                 </div>
        </div>
      </main>
    </div>

  );
}
