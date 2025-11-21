

import { RadialBar, RadialBarChart, Tooltip } from "recharts";
import { ChartContainer } from "../ui/chart";

interface spendAmountdata {
    precentage: number;
    
}

export function SpendableIncome() {

    const spendableamountleft = "50,772"
    const spendAmountdata = [{precentage: "20%"},]
    const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]
    const chartConfig = [{}]

    return(
        <div className="flex flex-row items-center  w-full h-20 border border-gray-300 shadow rounded-xl">
           <div className="flex flex-col align-center items-center pl-4 not-last-of-type:py-3">
            <h2 className=" text-xs">Spendable amount left this month</h2>
            <div className="flex flex-row items-baseline-last">
            <h2 className=" text-sm font-medium">Rs.</h2>   
            <h1 className=" pt-1 flex font-semibold text-2xl">{spendableamountleft}</h1>
            </div>
           </div>
           <div>
            <ChartContainer config={chartConfig}>
            <RadialBarChart
              data={chartData}
              startAngle={0}
              innerRadius={80}
              outerRadius={110}            
             >
             <RadialBar
               dataKey="precentage"
               background
               label={{fill:'blue'}}
               cornerRadius={10}/>
               <Tooltip/>
            </RadialBarChart></ChartContainer>
           </div>
        </div>
    );
}