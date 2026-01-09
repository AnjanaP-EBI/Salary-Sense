'use client'
import React from "react";
import { useApp } from "@/context/AppContext";

export function TotalBalance() {

    const totalBalance = "140,070,000" ;
    const { currency } = useApp();
    return(
        <div className="flex flex-row items-center justify-center bg-gray-200 dark:bg-[#525252] w-full h-20 border  border-gray-300 dark:border-[#525252] shadow  rounded-xl">
            <div className=" px-5 text-md font-medium border-r-2 border-black dark:border-[#c4c4c4]">Currunt Total Balance</div>
            
            <div className="w-2/3 flex flex-row items-baseline-last justify-end px-5">
            <h1 className="text-xl font-semibold">{currency}</h1>
            <h2 className="text-3xl font-semibold">{totalBalance}</h2></div>
        </div>
    )
}