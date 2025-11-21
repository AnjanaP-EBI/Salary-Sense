import { Pie, PieChart, ResponsiveContainer, Legend } from "recharts";
import { ChartTooltip, ChartContainer, ChartConfig } from "../ui/chart";
import { pt } from "date-fns/locale";

export function UsagePercentage() {
  const chartData = [
    { Category: "Housing", Usage: 40, fill: ["#120386"] },
    { Category: "Food", Usage: 20, fill: "#1666ba" },
    { Category: "Transport", Usage: 15, fill: "#0F8FA0" },
    { Category: "Others", Usage: 25, fill: "#23D7FF" },
  ];

  const chartConfig = {
    Category: {
      label: "Category",
    },
    Housing: {
      label: "Housing",
      color: "#120386",
    },
    Food: {
      label: "Food",
      color: "#1666ba",
    },
    Transport: {
      label: "Transport",
      color: "#0F8FA0",
    },
    Others: {
      label: "Others",
      color: "#23D7FF",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col items-center  w-full h-55 border border-gray-300 shadow rounded-xl">
      <h1 className="pt-3 text-xs">Percentage of Usage</h1>
      <ResponsiveContainer width="90%" height="90%" className={"pt-1"}>
        <PieChart>
          <ChartTooltip />
          <Pie
            data={chartData}
            dataKey={"Usage"}
            nameKey={"Category"}
            innerRadius={30}
            strokeWidth={1}
            // label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="square"
            iconSize={10}
            wrapperStyle={{ fontSize: "12px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
