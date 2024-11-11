"use client"
import React, { useEffect, useState } from 'react'
import ArrowBtn from './ui/arrow-btn';
import IconCont from './ui/icon-cont';
import { formatDate } from '@/lib/utils';
import { Minus, Plus } from 'lucide-react';
import { formatAsCurrency } from '@/lib/utils';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { fade} from '@/lib/animation';
import Card from './ui/card';


const intaildata = [
  { id: 1234567890123, src: "payPal", value: 12.89, type: "spending", date: "2024-11-01T11:55:00" },
  { id: 2345678901234, src: "apple", value: 13.90, type: "income", date: "2024-11-03T09:15:00" },
  { id: 3456789012345, src: "amazon", value: 25.50, type: "spending", date: "2024-11-04T16:45:00" },
  { id: 4567890123456, src: "google", value: 45.75, type: "income", date: "2024-11-05T20:20:00" },
  { id: 5678901234567, src: "netflix", value: 8.99, type: "spending", date: "2024-11-06T07:10:00" },
  { id: 6789012345678, src: "microsoft", value: 100.00, type: "income", date: "2024-11-07T13:05:00" },
  { id: 7890123456789, src: "chase", value: 15.25, type: "spending", date: "2024-11-08T18:00:00" },
  { id: 8901234567890, src: "tesla", value: 150.00, type: "income", date: "2024-12-08T19:00:00" }
];


const btns = ["all", "income", "spending"]
const Transcations = () => {
  const [data, setData] = useState(intaildata)
  const [filter, setFilter] = useState("all")
  useEffect(() => {
    const filterdList = filter == "all" ? intaildata : intaildata.filter(el => el.type == filter)
    setData(filterdList)

  }, [filter])


  return (
    <Card key="Transcations" className="md:col-span-4 row-span-2 text-secondary-foreground">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-light ">Transcations</h4>
        <ArrowBtn />
      </div>
      <div className="flex mb-5 items-center gap-0.5">
        {btns.map(el => (
          <button key={el} onClick={() => setFilter(el)} className={`px-5 py-2 rounded-lg capitalize transition-opacity ${filter == el ? "bg-yellow text-black" : "hover:opacity-70"}`}>{el}</button>
        ))}
      </div>



      <ul className='grid gap-3 ' >
        <AnimatePresence mode='wait'>
          {data.map(el => (
      
            <motion.li   {...fade as HTMLMotionProps<"li">}
              layout layoutId={el.src}  key={el.id} className='flex items-center gap-4'>
              <span className='grid place-content-center size-12 rounded-xl bg-white/10 '>
                <IconCont className='size-6 opacity-75' icon={el.src} />
              </span>
              <div>
                <h4 className='capitalize'>{el.src}</h4>
                <small>{formatDate(el.date)}</small>
              </div>
              <div className='ml-auto flex gap-2 items-center'>
                {el.type == "spending" ? <Minus size={16} /> : <Plus size={16} />}
                <span >{formatAsCurrency(el.value)}</span>
              </div>

            </motion.li>
          ))}
        </AnimatePresence>
      </ul>



    </Card>
  )
}

export default Transcations