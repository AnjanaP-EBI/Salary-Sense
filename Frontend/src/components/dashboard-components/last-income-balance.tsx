'use client'
import React from "react";
import { useApp } from "@/context/AppContext";
import { formatNumber } from "@/lib/utils";

type LastIncomeBalanceProps = {
    doneExpensesTotal: number;
    thismonthtotalIncome: number;
}


export function LastIncomeBalance ({doneExpensesTotal, thismonthtotalIncome}:LastIncomeBalanceProps) {

    const lastIncomeBalance = thismonthtotalIncome - doneExpensesTotal;
    const [setLastIncomebalance] = React.useState(lastIncomeBalance);
    const { currency } = useApp();

    return(
        <div className="flex flex-row items-center bg-gray-600  w-full h-20 border border-gray-300 dark:border-[#525252] shadow rounded-xl">
            <div className="w-1/2 pl-5 text-md font-medium border-r-2 text-white border-white dark:border-[#c4c4c4]">Balance of last Income</div>
            <div className="w-full flex flex-row items-baseline-last justify-end px-5">
            <h1 className="text-xl text-white font-semibold">{currency}</h1>
            <h2 className="text-3xl text-white font-semibold">{formatNumber(lastIncomeBalance)}</h2>
            </div>
        </div>
    )
}