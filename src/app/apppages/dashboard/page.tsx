"use client";
import React, { useState } from "react";
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
import { useApp } from "@/context/AppContext";
import { Currency } from "lucide-react";


// Define the expense type
type Expense = {
  id: string | number;
  Name: string;
  AmountValue: string;
  done: boolean;
  date?: Date;
  category?: string;
};

export default function DashboardPage() {
  // Shared state for expenses
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, Name: "Home loan", AmountValue: "130000", done: false },
    { id: 2, Name: "Vehical Finance", AmountValue: "400000", done: false },
  ]);


  
  const [thismonthtotalIncome] = useState<number>(2600000); // Your total income
  
  // Calculate done expenses total
  const doneExpensesTotal = expenses
    .filter(exp => exp.done)
    .reduce((sum, exp) => sum + parseFloat(exp.AmountValue || "0"), 0);
  
  
  // Function to add new expense
  const addExpense = (newExpense: Omit<Expense, 'id' | 'done'>) => {
    setExpenses(prev => [
      ...prev, 
      { 
        ...newExpense, 
        id: Date.now(), 
        done: false 
      }
    ]);
  };
  
  // Function to toggle expense done status
  const toggleExpenseDone = (id: string | number) => {
    setExpenses(prev => 
      prev.map(exp => 
        exp.id === id ? { ...exp, done: !exp.done } : exp
      )
    );
  };
  
  // Function to delete expense
  const deleteExpense = (id: string | number) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

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
      <main className="flex h-full w-full flex-col items-center bg-gray-100 border bg-whitelack sm:items-start dark:bg-[#242424]">
        
        <div className="flex flex-row justify-between w-full h-full p-[2%] gap-[1%]">
          <div className="w-1/3 h-full flex flex-col gap-[2%]">
                 {/* Component 2 - Shows spendable income */}
                 <SpendableIncome 
                   thismonthtotalIncome={thismonthtotalIncome}
                   doneExpenses={doneExpensesTotal}
                 />
                 
                 {/* Component 1 - Manages expenses */}
                 <MonthlyExpanses
                   expenses={expenses}
                   onAddExpense={addExpense}
                   onToggleExpense={toggleExpenseDone}
                   onDeleteExpense={deleteExpense}
                 />
          </div>

          <div className="w-1/3 h-full flex flex-col gap-[2%]">
                 <UsagePercentage/>
                 <IncomeExpansesChart/>
                 <StatusCard 
                     thisMonthTotalExpanses={7000000}
                     intendAmount={1800000}
                     thisMonthTotalBalance={100000}
                     lastMonthTotalBalance={100000}
                     actualSavingPercentage={10}
                     />
          </div>

          <div className="w-1/3 h-full flex flex-col gap-[2%]">
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