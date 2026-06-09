"use client";

import { useState, useEffect } from "react";
import { ChartContainer } from "../ui/chart";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React from "react";
import { useTheme } from "next-themes";
import LiquidFillGauge from "react-liquid-gauge";
import { useApp } from "@/context/AppContext";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";


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

  const spendableBudget = thismonthtotalIncome*((100 - savingPercentage)/100);
  const spendableAmount = spendableBudget - doneExpenses;
  // Calculate the percentage remaining (for liquid gauge)
  const percentageRemaining = spendableBudget > 0 
    ? ((spendableAmount / spendableBudget * 100)) 
    : 0;
  
  if (!mounted) {
    return null;
  }

  // Format spendable amount with commas
  const formattedSpendableAmount = spendableAmount.toLocaleString();

  const startColor = theme === "dark" ? "white" : "white";
  const endColor = "white";
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(percentageRemaining / 100);
  const valueTextColor = "#000000";
  
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
    <div className=" flex flex-row items-center justify-between gap-[3%] h-[25%] bg-blue-800 dark:border-[#525252] rounded-lg border-gray-300 ">
      {/* <Image
        src="/comp_bg/2.jpg"
        fill
        alt=""
        className="object-cover -z-10"
        />  */}
             <div className="flex flex-col align-center items-center justify-between w-3/5">
        <div className="h-1/3 text-xl text-white pb-[5%] ">Spendable amount left</div>
        <div className="flex flex-row items-baseline-last h-1/3">
          <h2 className="text-2xl text-white font-medium">{currency}</h2>
          <h1 className="pt-[2%] text-white flex font-semibold text-5xl">{formatNumber(spendableAmount)}</h1>
        </div>
        <div className="h-1/3"></div>
      </div>
      <div className="h-full flex items-center justify-center w-2/5">
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
              const value = (props.value).toFixed(2);
              const radius = Math.min(props.height / 2, props.width / 2);
              const textPixels = (props.textSize * radius) / 2.3;
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