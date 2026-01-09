"use client";

import { useState, useEffect } from "react";
import { ChartContainer } from "../ui/chart";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React from "react";
import { useTheme } from "next-themes";
import LiquidFillGauge from "react-liquid-gauge";
import { useApp } from "@/context/AppContext";

interface SpendableIncomeProps {
  
  thismonthtotalIncome: number;
  doneExpenses: number;
}

export function SpendableIncome({ 
   
  thismonthtotalIncome, 
  doneExpenses 
}: SpendableIncomeProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { currency } = useApp();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const { savingPercentage } = useApp();

  const spendableAmount = thismonthtotalIncome*(100 - savingPercentage)/100 - doneExpenses;
  // Calculate the percentage remaining (for liquid gauge)
  const percentageRemaining = thismonthtotalIncome > 0 
    ? Math.round((spendableAmount - doneExpenses)/spendableAmount * 100) 
    : 0;
  
  if (!mounted) {
    return null;
  }

  // Format spendable amount with commas
  const formattedSpendableAmount = spendableAmount.toLocaleString();

  const startColor = theme === "dark" ? "#89CFF0" : "#0055b3";
  const endColor = "#1666ba";
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(percentageRemaining / 100);
  const valueTextColor = "#ffffff";
  
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor)?.darker(0.5)?.toString() ?? fillColor,
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor)?.brighter(0.5)?.toString() ?? fillColor,
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  const chartConfig = {};

  return (
    <div className="flex flex-row items-center justify-between gap-[3%] h-[25%]">
      <div className="flex flex-col align-center items-center bg-gradient-to-b from-blue-400 to-blue-800 justify-center h-full border border-gray-300 dark:border-[#525252] rounded-lg w-3/5">
        <h2 className="text-xl text-white pb-[3%]">Spendable amount left</h2>
        <div className="flex flex-row items-baseline-last">
          <h2 className="text-2xl text-white font-medium">{currency}</h2>
          <h1 className="pt-[2%] text-white flex font-semibold text-5xl">
            {spendableAmount}
          </h1>
        </div>
      </div>
      <div className="border h-full flex items-center justify-center bg-white border-gray-300 shadow-lg dark:border-[#525252] rounded-xl w-2/5 ">
        <ChartContainer config={chartConfig} className="h-[90%] w-[90%] p-[5%]">
          <LiquidFillGauge
            className="items-center justify-center"
            width={20}
            height={20}
            value={percentageRemaining}
            percent="%"
            textsize={1}
            textOffsetX={0}
            textOffsetY={15}
            textVerPosition={0.5}
            textRenderer={(props: {
              value: number;
              percent: string;
              height: number;
              width: number;
              textSize: number;
            }) => {
              const value = Math.round(props.value);
              const radius = Math.min(props.height / 2, props.width / 2);
              const textPixels = (props.textSize * radius) / 2;
              const valueStyle = { fontSize: textPixels, fill: valueTextColor };
              const percentStyle = { 
                fontSize: textPixels * 0.6, 
                fill: valueTextColor 
              };
              return (
                <tspan>
                  <tspan className="value" style={valueStyle}>
                    {value}
                  </tspan>
                  <tspan style={percentStyle}> {props.percent}</tspan>
                </tspan>
              );
            }}
            riseAnimation
            waveAnimation
            waveFreaquency={0.1}
            waveAmplitude={2}
            gradient
            gradientStops={gradientStops}
            circleStyle={{ fill: fillColor }}
            waveStyle={{ fill: fillColor }}
            textStyle={{
              fill: color("#444")?.toString(),
              fontFamily: "Arial",
            }}
            waveTextStyle={{
              fill: color("#fff")?.toString(),
              fontFamily: "Arial",
            }}
          />
        </ChartContainer>
      </div>
    </div>
  );
}