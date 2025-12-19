

import { RadialBar, RadialBarChart, Tooltip, PolarGrid, PolarRadiusAxis, Label } from "recharts";
import { ChartContainer } from "../ui/chart";
import { LiquidGauge } from "react-liquid-gauge"
import { Value } from "@radix-ui/react-select";

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
            className=" h-20 w-20  ">
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
           {/* <div style = {{ width:20, height:20}}>
            <LiquidGauge
              value={Value}
        width={200}
        height={200}
        waveFrequency={2}
        waveAmplitude={1}
        textSize={1}
        waveSpeed={0.2}
        circleStyle={{ fill: "#00BFFF" }}
        waveStyle={{ fill: "#1E90FF" }}
        textStyle={{ fill: "#000", fontSize: "24px" }}
             />
           </div> */}
        </div>
    );
}