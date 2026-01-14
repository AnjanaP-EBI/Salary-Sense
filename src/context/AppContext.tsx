"use client";

import { useState, ReactNode, createContext, useContext } from "react";

type AppContextType = {
  theme: string;
  setTheme: (value: string) => void;

  currency: string;
  setCurrency: (value: string) => void;

  language: string;
  setLanguage: (value:string) => void;

  savingPercentage: number;
  setSavingPercentage: (value:number) => void;

  spendableAmount: number;
  setSpendableAmount: (value:number) => void;

  thismonthtotalIncome: number;
  setThismonthtotalIncome: (value:number) => void;

  doneExpensesTotal: number;
  setDoneExpensesTotal: (value:number) => void;

  currentTotalBalance: number;
  setCurrentTotalBalance: (value:number) => void;


};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {

const [theme, setTheme] = useState('light');
const [currency, setCurrency] = useState('$');
const [language, setLanguage] = useState('en');
const [savingPercentage, setSavingPercentage] = useState(5);
const [spendableAmount, setSpendableAmount] = useState(0);
const [thismonthtotalIncome, setThismonthtotalIncome] = useState(0);
const [doneExpensesTotal, setDoneExpensesTotal] = useState(0);
const [currentTotalBalance, setCurrentTotalBalance] = useState(500000000);

  return (
    <AppContext.Provider value={{
      theme,
      setTheme,
      currency,
      setCurrency,
      language,
      setLanguage,
      savingPercentage,
      setSavingPercentage,
      spendableAmount,
      setSpendableAmount,
      thismonthtotalIncome,
      setThismonthtotalIncome,
      doneExpensesTotal,
      setDoneExpensesTotal,
      currentTotalBalance,
      setCurrentTotalBalance
    }}>
      {children}    
    </AppContext.Provider>
  );
};

export function useApp() {
   const context = useContext(AppContext);
   if (!context) {
    throw new Error ("useApp must be used within an AppProvider");
   }
   return context;
}