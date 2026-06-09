'use client'

import { useApp } from "@/context/AppContext";


interface ExpanseStatusProps {
    thisMonthTotalExpanses: number;
    intendAmount: number;   
}

interface currentSavingStatusProps {
    thisMonthTotalBalance: number,
    lastMonthTotalBalance: number,
}

interface actualSavingPercentageProps {
    actualSavingPercentage: number,
    intendSaving: number,
}

export function StatusCard( {thisMonthTotalExpanses,thisMonthTotalBalance,lastMonthTotalBalance,thismonthtotalIncome}:{thisMonthTotalExpanses:number,thisMonthTotalBalance:number,lastMonthTotalBalance:number,thismonthtotalIncome:number}) {
    
    const {savingPercentage} = useApp();

    const intendAmount = thismonthtotalIncome * ((100 - savingPercentage) / 100);

    const actualSavingPercentage = ((thismonthtotalIncome - thisMonthTotalExpanses) / thismonthtotalIncome) * 100;

    // ----------------------for espanseStatus--------------------------
    const expanseStatus = // Overflowing | on Edge | Fine
         thisMonthTotalExpanses > intendAmount ? "Overflowing":
         thisMonthTotalExpanses === intendAmount ? "On Edge":
         "Fine" ;

    const expanseStatusColor = 
          expanseStatus === "Overflowing" ? "#FF0000":
          expanseStatus === "On Edge" ? "#FF8400":
          "#4DA813";

    //---------------------for TotalSavings-------------------------------
    const currentSavingStatus = // Temp.Decrease | Temp.Increase | Nutral
            thisMonthTotalBalance < lastMonthTotalBalance ? "Temp.Decrease":
            thisMonthTotalBalance > lastMonthTotalBalance ? "Increasing":
            "Nutral";

     const currentSavingStatusColor = 
          currentSavingStatus === "Temp.Decrease" ? "#FF0000":
          currentSavingStatus === "Nutral" ? "#FF8400":
          "#4DA813";

    // // ---------------------for actual Saving percentage-------------------
    // const actualSavingPercentageStatus =
    //       actualSavingPercentage < intendSaving ? "FF0000":
    //       actualSavingPercentage === intendSaving ? "FF8400":
    //       "#4DA813";
    

    const actualSavingPercentageStatusColor =
          actualSavingPercentage < savingPercentage ? "#FF0000":
          actualSavingPercentage === savingPercentage ? "#FF8400":
          "#4DA813";

    


    return(
        <div className="flex flex-col items-center gap-5 amber-500 w-full h-[30%] ">
            {/* <div className="flex w-full items-center justify-center">
                <h1 className="text-md font-bold pt-[3%]">Current Status</h1>
            </div> */}
            {/* <div className="flex flex-row w-full pt-2">
                <div className="flex flex-col pt-[3%] pl-[5%] text-sm font-semibold items-start w-2/3 gap-1">
                   <p></p>
                    <p>Status of this month expanses</p>
                    <p>Total Savings current status</p>
                    <p>This month saving percentage(intend)</p>
                    <p>This month actual saving percentage</p>
                </div>
                <div className="flex flex-col justify-end items-end pr-[5%] text-sm font-medium w-1/3 gap-1">
                <p></p>
                <p style={{color:expanseStatusColor, fontWeight:"bold"}}>{expanseStatus}</p>
                <p style={{color:currentSavingStatusColor, fontWeight:"bold"}}>{currentSavingStatus}</p>
                <p>{savingPercentage}%</p>
                <p style={{color:actualSavingPercentageStatusColor, fontWeight:"bold" }}>{Number(actualSavingPercentage).toFixed(2)}%</p>
                </div>    
            </div> */}
            <div className="flex flex-row w-full gap-5 h-[50%] items-center justify-center">
            <div className="flex flex-col w-[50%] h-full items-center gap-5 border text-xs font-semibold rounded-xl justify-center bg-{expanseStatusColor}">
             <p>Status of this month expanses </p> 
             <p style={{color:expanseStatusColor, fontWeight:"bold"}}>{expanseStatus}</p>  
            </div>
           

            <div className="flex w-[50%] h-full items-center justify-center border text-xs font-semibold rounded-xl bg-{currentSavingStatusColor}">
            Total Savings current status
            </div>

            </div>


            <div className="flex flex-row w-full gap-5 h-[50%] items-center justify-center">
            <div className="flex w-[50%] h-full items-center  border text-xs font-semibold rounded-xl justify-center bg-{expanseStatusColor}">
                This month saving percentage(intend)
            </div>

            <div className="flex w-[50%] h-full items-center border text-xs font-semibold rounded-xl justify-center bg-{actualSavingPercentageStatusColor}">
            This month actual saving percentage
            </div>
            </div>

        </div>
    )
}