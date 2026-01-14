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
    { id: 3, Name: "Vehical 2 Finance", AmountValue: "1100000", done: false },
    { id: 4, Name: "Electricity bill", AmountValue: "6600", done: false },
    { id: 5, Name: "Cloths", AmountValue: "21000", done: false },
    { id: 6, Name: "Dinner out", AmountValue: "8000", done: false },
    { id: 7, Name: "Cinama", AmountValue: "7000", done: false },
    { id: 8, Name: "New shop opening", AmountValue: "120000", done: false },
    { id: 9, Name: "Air tickets", AmountValue: "750000", done: false },
    { id: 10, Name: "jewelary", AmountValue: "2100", done: false },
    { id: 12, Name: "Bike service", AmountValue: "18000", done: false },
    { id: 14, Name: "Internet bill", AmountValue: "15000", done: false },
    { id: 15, Name: "telephone bill", AmountValue: "2100", done: false },
    { id: 16, Name: "Mobile bills", AmountValue: "2000", done: false },
    { id: 18, Name: "Decor", AmountValue: "50000", done: false },
  ]);

  const TotalMonthlyExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.AmountValue || "0"),
    0
  );


  
  const [thismonthtotalIncome] = useState<number>(5000000); // Your total income
  
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
  
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#eaecf1]font-sans">
      <main className="flex h-full w-full flex-col items-center bg-gray-100 border bg-whitelack sm:items-start dark:bg-[#242424]">
        
        <div className="flex flex-row justify-between w-full h-full p-[1%] gap-[1%]">
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
                     thisMonthTotalExpanses={TotalMonthlyExpenses}
                     thisMonthTotalBalance={100000}
                     lastMonthTotalBalance={100000}
                     />
          </div>

          <div className="w-1/3 h-full flex flex-col gap-[2%]">
                 <TotalBalance/>
                 <LastIncomeBalance
                  thismonthtotalIncome={thismonthtotalIncome}
                  doneExpensesTotal={doneExpensesTotal}/>
                 <IncomeDecreaseChart/>
                 <OverallBalanceChart/>                 
          </div>
        </div>
      </main>
    </div>
  );
}