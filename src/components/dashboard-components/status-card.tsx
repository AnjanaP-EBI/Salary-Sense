import { Bold } from "lucide-react";

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

export function StatusCard( {thisMonthTotalExpanses,intendAmount,thisMonthTotalBalance,lastMonthTotalBalance,actualSavingPercentage,intendSaving}:{thisMonthTotalExpanses:number,intendAmount:number,thisMonthTotalBalance:number,lastMonthTotalBalance:number,actualSavingPercentage:number,intendSaving:number}) {
    
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

    //---------------------for actual Saving percentage-------------------
    // const actualSavingPercentageStatus =
    //       actualSavingPercentage < intendSaving ? "FF0000":
    //       actualSavingPercentage === intendSaving ? "FF8400":
    //       "#4DA813";
    
    const actualSavingPercentageStatusColor =
          actualSavingPercentage < intendSaving ? "#FF0000":
          actualSavingPercentage === intendSaving ? "#FF8400":
          "#4DA813";
         



    return(
        <div className="flex flex-col items-center w-full h-43.5 border border-gray-300 shadow rounded-xl">
            <div className="flex w-full items-center justify-center">
                <h1 className="text-xs pt-3">Current Status</h1>
            </div>
            <div className="flex flex-row w-full pt-2">
                <div className="flex flex-col pt-5 pl-3 text-[10px] items-start w-2/3 gap-1">
                   <p></p>
                    <p>Status of this month expanses</p>
                    <p>Total Savings current status</p>
                    <p>This month saving percentage(intend)</p>
                    <p>This month actual saving percentage</p>
                </div>
                <div className="flex flex-col justify-end items-end pr-3 text-[10px] w-1/3 gap-1">
                <p></p>
                <p style={{color:expanseStatusColor, fontWeight:"bold"}}>{expanseStatus}</p>
                <p style={{color:currentSavingStatusColor, fontWeight:"bold"}}>{currentSavingStatus}</p>
                <p>{intendSaving}%</p>
                <p style={{color:actualSavingPercentageStatusColor, fontWeight:"bold" }}>{actualSavingPercentage}%</p>
                </div>    
            </div>

        </div>
    )
}