
"use client"


import { Bar, BarChart, XAxis } from "recharts"
import { motion, useMotionValue, useSpring } from "framer-motion";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ChevronUp, Plus } from "lucide-react"
import { formatAsCurrency } from "@/lib/utils"
import { useEffect, useState } from "react";
import ArrowBtn from "./ui/arrow-btn";
import { item } from "@/lib/animation";


const chartData = [
    { date: "2024-04-01", value: 222 },
    { date: "2024-04-02", value: 97 },
    { date: "2024-04-03", value: 167 },
    { date: "2024-04-04", value: 242 },
    { date: "2024-04-05", value: 373 },
    { date: "2024-04-06", value: 301 },
    { date: "2024-04-07", value: 245 },
    { date: "2024-04-08", value: 409 },
    { date: "2024-04-09", value: 59 },
    { date: "2024-04-10", value: 261 },
    { date: "2024-04-11", value: 327 },
    { date: "2024-04-12", value: 292 },
    { date: "2024-04-13", value: 342 },
    { date: "2024-04-14", value: 137 },
    { date: "2024-04-15", value: 120 },
    { date: "2024-04-16", value: 138 },
    { date: "2024-04-17", value: 446 },
    { date: "2024-04-18", value: 364 },
    { date: "2024-04-19", value: 243 },
    { date: "2024-04-20", value: 89 },
    { date: "2024-04-21", value: 137 },
    { date: "2024-04-22", value: 224 },
    { date: "2024-04-23", value: 138 },
    { date: "2024-04-24", value: 387 },
    { date: "2024-04-25", value: 215 },
    { date: "2024-04-26", value: 275 },
    { date: "2024-04-27", value: 383 },
    { date: "2024-04-28", value: 250 },
    { date: "2024-04-29", value: 400 },
    { date: "2024-04-30", value: 450 },
    { date: "2024-05-01", value: 390 },
    { date: "2024-05-02", value: 373 },
    { date: "2024-05-03", value: 383 },



]


const chartConfig = {
    views: {
        label: "Page Views",
    },
    value: {
        label: "value",
        color: "hsl(var(--blue))",
    },
} satisfies ChartConfig

function Balance() {
    const [balance, setBalance]=useState(["0","00"])

   

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    useEffect(() => {

        setTimeout(() => {
            motionValue.set(25230);
        }, 300);
    }, [motionValue]);
    useEffect(
        () =>
          springValue.on("change", (latest) => {
            setBalance(formatAsCurrency(latest).split("."));
          }),
        [springValue],
      );
    return (

        <motion.div key={"Balance"} variants={item} className="md:col-span-4 xl:col-span-5 flex gap-7 flex-col gradient text-black p-7 rounded-3xl relative">
           <ArrowBtn className="absolute top-5 right-5 bg-black"/>
            <span className="text-lg font-light">Totale Balance</span>
            <h4 className="my-auto">
                <span className="text-7xl font-light inline-block">{balance[0]}.</span>
                <span className="text-5xl font-light inline-block opacity-60">
                    {balance[1]}
                </span>
            </h4>
            <div className="flex items-center gap-5 ">
                <span className="flex items-center gap-1 pl-3 pr-4 py-2 text-xs rounded-[30px] bg-black text-white/90">
                    <ChevronUp size={14} fill="#fff" /> 10%
                </span>
                <span className="flex items-center gap-1 pl-3 pr-4 py-2 t text-xs rounded-[30px] bg-black text-white/90">
                    <Plus size={14} /> {formatAsCurrency(2780)}
                </span>
            </div>

            <ChartContainer
                config={chartConfig}
                className="aspect-auto absolute bottom-4 right-4 w-[180px] h-[90px]"
            >
                <BarChart
                    accessibilityLayer
                    data={chartData}



                >

                    <XAxis
                        dataKey="date"
                        hide={true}
                    />
                    <ChartTooltip cursor={false}
                        content={
                            <ChartTooltipContent
                                className="w-[150px]"
                                nameKey="views"
                                labelFormatter={(value) => {
                                    return new Date(value).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                }}
                            />
                        }
                    />
                    <Bar maxBarSize={2} dataKey={"value"} radius={5} fill={`#000`} />
                </BarChart>
            </ChartContainer>

        </motion.div>
    )
}



export default Balance