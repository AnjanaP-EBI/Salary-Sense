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
      <main className="flex h-[682px] w-full flex-col items-center bg-white rounded-b-xl border  bg-whitelack sm:items-start darl:bg-black">
        
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
