'use client'
import { CartesianGrid,Line,LineChart,XAxis,YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function IncomeDecreaseChart() {

    const chartData = [
  { date: "28th", Amount: 2140400 },
  { date: "4th", Amount: 1950500 },
  { date: "8th", Amount: 1650000 },
  { date: "11th", Amount: 1530050 },
  { date: "17th", Amount: 1480070 },
  { date: "18th", Amount: 920070 },
  { date: "21th", Amount: 720070 },
  { date: "23rd", Amount: 420070 },
  { date: "25th", Amount: 220070 },
]

const chartConfig = {
  Amount: {
    label: "Amount",
    color: "1666ba",
  },
} satisfies ChartConfig

    return (
        <div className="flex flex-col items-center  w-full h-55 border border-gray-300 shadow rounded-xl gap-2">
            <h1 className="text-xs pt-3">This Month Income Expense</h1>
            <ChartContainer config={chartConfig}
              className="h-40 w-auto ">
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{left:10,right:10,top:10}}>
                    <CartesianGrid vertical={true}
                    horizontal={false}/>
                    <XAxis
                        dataKey= "date"
                        interval={0}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0,5)}
                        tick={{ fontSize:8}}/>
                        <ChartTooltip
                            cursor={true}
                            content={<ChartTooltipContent hideLabel/>}
                        />
                        <Line
                           dataKey="Amount"
                           type="linear"
                           stroke="#1666ba"
                           strokeWidth={2}
                           dot={true}
                        />
                  </LineChart>
            </ChartContainer>
        </div>
    )
}