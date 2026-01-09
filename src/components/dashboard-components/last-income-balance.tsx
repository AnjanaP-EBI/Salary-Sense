'use client'
import React from "react";
import { useApp } from "@/context/AppContext";


export function LastIncomeBalance () {

    const lastIncomeBalance = "1,320,070"
    const { currency } = useApp();

    return(
        <div className="flex flex-row items-center bg-gray-200  dark:bg-[#525252] w-full h-20 border border-gray-300 dark:border-[#525252] shadow rounded-xl">
            <div className="w-1/2 pl-5 text-md font-medium border-r-2 border-black dark:border-[#c4c4c4]">Balance of last Income</div>
            <div className="w-full flex flex-row items-baseline-last justify-end px-5">
            <h1 className="text-xl font-semibold">{currency}</h1>
            <h2 className="text-3xl font-semibold">{lastIncomeBalance}</h2>
            </div>
        </div>
    )
}