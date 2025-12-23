"use client";

import { useState } from "react";
import { ChartContainer } from "../ui/chart";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import LiquidFillGauge from "react-liquid-gauge";
import { Value } from "@radix-ui/react-select";
import { RadialBarChart, RadialBar, Tooltip } from "recharts";

interface spendAmountdata {
  precentage: number;
}

export function SpendableIncome() {
  const [value, setValue] = useState(45);

  const spendableamountleft = "460,772";
  const spendAmountdata = [{ precentage: "20%" }];
  const chartData = [{ name: "Spendable", value: 20, fill: "#1666ba" }];
  const chartConfig = {};
  const startColor = "#00FFFF"; // cornflowerblue
  const endColor = "#1666ba"; // crimson
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);
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

  return (
    <div className="flex flex-row items-center justify-between gap-4 h-40 ">
      <div className="flex flex-col align-center items-center justify-center h-full border border-gray-300 shadow rounded-xl  w-3/5">
        <h2 className=" text-xs">Spendable amount left </h2>
        <div className="flex flex-row items-baseline-last">
          <h2 className=" text-sm font-medium">Rs.</h2>
          <h1 className=" pt-1 flex font-semibold text-2xl">
            {spendableamountleft}
          </h1>
        </div>
      </div>
      <div className=" border h-full flex items-center justify-center border-gray-300 shadow rounded-xl w-2/5">
        <ChartContainer config={chartConfig} className=" h-30 w-30 p-3">

          <LiquidFillGauge
            className="items-center justify-center"
            width={20}
            height={20}
            value={value}
            percent="%"
            textsize={1}
            textOffsetX={0}
            textOffsetY={0}
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
              const valueStyle = { fontSize: textPixels };
              const percentStyle = { fontSize: textPixels * 0.6 };
              return (
                <tspan>
                  <tspan className="value" style={valueStyle}>
                    {" "}
                    {value}{" "}
                  </tspan>
                  <tspan style={percentStyle}> {props.percent} </tspan>
                </tspan>
              );
            }}
            riseAnimation
            waveAnimation
            waveFreaquency={0.1}
            waveAmplitude={0.8}
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
