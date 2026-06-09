'use client'
import React from "react";
import { useApp } from "@/context/AppContext";
import { formatNumber } from "@/lib/utils";

export function TotalBalance() {

    
    const { currency, currentTotalBalance} = useApp();
    return(
        <div className="flex flex-row items-center justify-center bg-gray-600 w-full h-20 border  border-gray-300 dark:border-[#525252] shadow  rounded-xl">
            <div className=" px-5 text-md font-medium text-white border-r-2 border-white dark:border-[#c4c4c4]">Currunt Total Balance</div>
            
            <div className="w-2/3 flex flex-row items-baseline-last justify-end px-5">
            <h1 className="text-xl text-white font-semibold">{currency}</h1>
            <h2 className="text-3xl text-white font-semibold">{formatNumber(currentTotalBalance)}</h2></div>
        </div>
    )
}