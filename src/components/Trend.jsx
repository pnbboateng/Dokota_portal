
"use client";
import { BarChart, Bar } from "recharts";
import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart";

  const chartData = [
    { month: "January", doctors: 186, patients: 80 },
    { month: "February", doctors: 305, patients: 200 },
    { month: "March", doctors: 237, patients: 120 },
    { month: "April", doctors: 73, patients: 190 },
    { month: "May", doctors: 209, patients: 130 },
    { month: "June", doctors: 214, patients: 140 },
  ];

  const chartConfig = {
    doctors: { label: "doctors", color: "#4c0519" }, // Rose-950
    patients: { label: "patients", color: "#030712" },
  };

  
  import React from 'react'
  
  const Trend = () => {
    const totalVisitors = useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
      }, []);
    return (
      <div>
        <Card className="max-w-xxl">
              <CardHeader>
                <CardTitle>Onboarding - Doctors & Patients</CardTitle>
                <CardDescription>
                  Showing total onboarded for the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <AreaChart
                    width={300}
                    height={180}
                    accessibilityLayer
                    data={chartData}
                    margin={{ left: 8, right: 8, top: 5, bottom: 5 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={6}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    {Object.entries(chartConfig).map(([key, { color }]) => (
                      <Area
                        key={key}
                        dataKey={key}
                        type="natural"
                        fill={color}
                        fillOpacity={0.4}
                        stroke={color}
                        stackId="a"
                      />
                    ))}
                  </AreaChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                      January - June 2024
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
        
      </div>
    )
  }
  
  export default Trend
  