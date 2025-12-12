

import { RadialBar, RadialBarChart, Tooltip, PolarGrid, PolarRadiusAxis, Label } from "recharts";
import { ChartContainer } from "../ui/chart";

interface spendAmountdata {
    precentage: number;
    
}

export function SpendableIncome() {

    const spendableamountleft = "50,772"
    const spendAmountdata = [{precentage: "20%"},]
    const chartData = [{ name: "Spendable", value: 20, fill: "#1666ba" },];
    const chartConfig = {}

    return(
        <div className="flex flex-row items-center justify-between h-20 border border-gray-300 shadow rounded-xl">
           <div className="flex flex-col align-center items-center pl-4 w-2/3">
            <h2 className=" text-xs">Spendable amount left this month</h2>
            <div className="flex flex-row items-baseline-last">
            <h2 className=" text-sm font-medium">Rs.</h2><h1 className=" pt-1 flex font-semibold text-2xl">{spendableamountleft}</h1>
            </div>
           </div>
           <div className="justify-end w-1/3">
            <ChartContainer config={chartConfig}
            className=" h-[80px] w-[80px]  ">
            <RadialBarChart
              width={48}
              height={48}
              cy='50%'
              cx='50%'
              innerRadius={30}
              outerRadius={40}  
              barSize={10}
              data={chartData}
                      
             >
              <RadialBar
               dataKey="value"
               cornerRadius={10}
               background={{ fill: "#e5e7eb" }}
               />
               

               <Tooltip/>
            </RadialBarChart>
            </ChartContainer>
           </div>
        </div>
    );
}