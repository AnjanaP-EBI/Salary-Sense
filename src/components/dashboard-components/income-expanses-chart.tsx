import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis,Legend } from "recharts";

export function IncomeExpansesChart() {

    const chartData = [
  { month: "January", Income: 1860000, Expanse: 800000 },
  { month: "February", Income: 3050000, Expanse: 2000000 },
  { month: "March", Income: 2370000, Expanse: 1209000 },
  { month: "April", Income: 1730000, Expanse: 1905500 },
  { month: "May", Income: 2095000, Expanse: 1300000 },
  { month: "June", Income: 2140400, Expanse: 1403520 },
]

const chartConfig = {
  Income: {
    label: "Income",
    color: "1666ba",
  },
  Expanse: {
    label: "Expanse",
    color: "#d8d8d8",
  },
} satisfies ChartConfig

  return (
    <div className="flex flex-col justify-between items-center  w-full h-55 border border-gray-300 shadow rounded-xl">
        <h1 className="pt-2 text-xs">Income and Expanses of last 6 month</h1>
        <div className="h-auto w-4/5">
      <ChartContainer config={chartConfig} className="pb-3">
        <BarChart data={chartData}>
          <defs>
          <linearGradient id="incomeBarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1666ba" />
            <stop offset="100%" stopColor="#73C8D2" />
          </linearGradient>
          <linearGradient id="expanseBarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DD0303" />
            <stop offset="100%" stopColor="#FF8FB7" />  
          </linearGradient></defs>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="Income" fill="url(#incomeBarGradient)" radius={3} barSize={10}/>
          <Bar dataKey="Expanse" fill="url(#expanseBarGradient)" radius={3} barSize={10}/>
          <Legend/>
        </BarChart>
      </ChartContainer></div>
    </div>
  );
}
