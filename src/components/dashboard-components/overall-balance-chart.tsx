import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

export function OverallBalanceChart() {
  const chartData = [
    { month: "January", Amount: 51007000 },
    { month: "February", Amount: 31007000 },
    { month: "March", Amount: 61007000 },
    { month: "April", Amount: 51007000 },
    { month: "May", Amount: 61007000 },
    { month: "June", Amount: 90007000 },
    { month: "July", Amount: 71007000 },
    { month: "Augest", Amount: 83007000 },
    { month: "September", Amount: 111007000 },
    { month: "Octomber", Amount: 112007000 },
    { month: "November", Amount: 133950000 },
    { month: "December", Amount: 140070000 },
  ];

  const chartConfig = {
    Amount: {
      label: "Amount",
      color: "1666ba",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col items-center  w-full h-55 border border-gray-300 shadow rounded-xl gap-2">
      <h1 className="text-xs pt-3">Overall Balance</h1>
      <ChartContainer config={chartConfig} className="h-40 w-auto ">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{ left: 10, right: 10, top: 10 }}
        >
          <CartesianGrid vertical={true} horizontal={false} />
          <XAxis
            dataKey="month"
            interval={0}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0,3)}
            tick={{ fontSize:8 }}
          />
          <ChartTooltip
            cursor={true}
            content={<ChartTooltipContent hideLabel />}
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
  );
}
