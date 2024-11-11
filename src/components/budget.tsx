"use client"
import { Bar, BarChart, XAxis, YAxis } from "recharts"


import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

import Card from "./ui/card";
const chartData = [
  { month: "Jan", budget: 9000, income: 3186, spent: 2080, scheduled: 600, savings: 1000 },
  { month: "Feb", budget: 9000, income: 2000, spent: 1000, scheduled: 1500, savings: 500 },
  { month: "Mar", budget: 9000, income: 500, spent: 2100, scheduled: 400, savings: 600 },
  { month: "Apr", budget: 9000, income: 2100, spent: 1900, scheduled: 1000, savings: 1050 },
  { month: "May", budget: 9000, income: 1000, spent: 2300, scheduled: 700, savings: 350 },
  { month: "Jun", budget: 9000, income: 500, spent: 1500, scheduled: 1000, savings: 1700 },
];


const chartConfig = {
  income: {
    label: "income",
    color: "hsl(var(--yellow)/30%)",
  },
  spent: {
    label: "spent",
    color: "hsl(var(--yellow)/50%)",
  },
  scheduled: {
    label: "scheduled",
    color: "hsl(var(--yellow)/70%)",
  },
  savings: {
    label: "savings",
    color: "hsl(var(--yellow))",
  },
} satisfies ChartConfig
const options = ["monthly", "yearly"]
export function Budget() {
  const [selected, setSelected] = useState("monthly")
  return (
    <Card key="Budget" className="md:col-span-4 xl:col-span-5">
      <div className="flex items-center mb-5">
        <h4 className="text-xl font-light text-secondary-foreground">Budget</h4>

          <ul className="rounded-[30px] ml-auto p-1 flex items-center bg-black z-10">
            {options.map(el => (
              <li className={`px-4 cursor-pointer py-2 text-sm rounded-[30px] transition-opacity capitalize ${selected == el ? "bg-yellow text-background" : " hover:opacity-75"}`} onClick={() => setSelected(el)} key={el}>{el}</li>
            ))}
          </ul>
      
      </div>


      <ChartContainer className="mt-auto -ml-5 -mr-1.5" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData} >

          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis

            dataKey="budget"

            tickLine={false}
            tickMargin={10}


            axisLine={false}
            tickFormatter={(value) => formatNumber(value)}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar

            dataKey="income"
            stackId="a"
            cy={20}
            fill="var(--color-income)"
            radius={[4, 4, 4, 4]}
          />
          <Bar
            dataKey="spent"
            stackId="a"
            fill="var(--color-spent)"
            radius={[4, 4, 4, 4]}
            style={{ transform: "translateY(-5px)" }}
          />
          <Bar
            dataKey="scheduled"
            stackId="a"
            fill="var(--color-scheduled)"
            radius={[4, 4, 4, 4]}
            style={{ transform: "translateY(-10px)" }}
          />
          <Bar
            dataKey="savings"
            stackId="a"
            fill="var(--color-savings)"
            radius={[4, 4, 4, 4]}
            style={{ transform: "translateY(-15px)" }}
          />
        </BarChart>
      </ChartContainer>


    </Card>
  )
}
