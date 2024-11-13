"use client"

import { Label, Pie, PieChart, Sector } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { formatAsCurrency } from "@/lib/utils"
import { useState } from "react"
import ArrowBtn from "./ui/arrow-btn"

import Card from "./ui/card"


const chartData = [
    { key: "transport", value: 1000, fill: "hsl(var(--blue))" },
    { key: "food", value: 900, fill: "hsl(var(--yellow))" },
    { key: "clothes", value: 600, fill: "hsl(var(--green))" },
    { key: "others", value: 400, fill: "hsl(var(--foreground))" },

]
const total= 2900
const chartConfig = {
    transport: {
        label: "transport",
        color: "hsl(var(--blue))",
    },
    food: {
        label: "food",
        color: "hsl(var(--yellow))",
    },
    clothes: {
        label: "clothes",
        color: "hsl(var(--green))",
    },
    others: {
        label: "others",
        color: "hsl(var(--foreground))",
    },
} satisfies ChartConfig

export function Spending() {
    const [active, setActive] = useState(1)

    return (
        <Card className="md:col-span-3">
            <div className="flex items-center justify-between mb-5">
                <h4 className="text-xl font-light text-secondary-foreground">Top Spending</h4>
              <ArrowBtn/>
            </div>
            <div className="aspect-[1/.5] mt-auto w-full max-w-[300px]  mx-auto relative mb-12 ">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-[1/1] absolute top-0 w-full"

                >


                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="key"
                            endAngle={180}
                            innerRadius={127}
                            outerRadius={130}
                            paddingAngle={4}
                            cornerRadius={5}
                            strokeWidth={0}
                            activeIndex={active}
                            activeShape={({
                                outerRadius = 0,
                                ...props
                            }: PieSectorDataItem) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius} style={{ transform: "translateY(-5px)", margin: "0 -5px" }} />
                                    <Sector
                                        {...props}
                                        cornerRadius={0}
                                        className="origin-top scale-[.97]"
                                        outerRadius={outerRadius}
                                        innerRadius={outerRadius - 50}
                                        opacity={.3}
                                    />
                                </g>
                            )}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text className="-translate-y-1"
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl"
                                                >
                                                    {formatAsCurrency(chartData[active].value)}
                                                </tspan>

                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
            <ul className="grid gap-2 text-sm list-none relative z-10">
                {chartData.map((el,i)=>(
                    <li onClick={()=>setActive(i)} key={el.key+ i} className="cursor-pointer flex items-center gap-2">
                        <span style={{background:el.fill}} className="block size-2 rounded-full"/>
                        <h4 className="capitalize text-sm">{el.key}</h4>
                        <span className="block ml-auto text-sm text-secondary-foreground">{Math.floor((100 * el.value) / total)}%</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}
