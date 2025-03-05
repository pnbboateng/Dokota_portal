"use client";
import { BarChart, Bar } from "recharts";
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
  
  const Piechart = () => {
    return (
      <div>
        <Card className="max-w-xxl">
      <CardHeader>
        <CardTitle>Payments - Doctors & Patients</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
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
              tickMargin={6}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {Object.entries(chartConfig).map(([key, { color }]) => (
              <Bar key={key} dataKey={key} fill={color} radius={4} />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
        
      </div>
    )
  }
  
  export default Piechart
  