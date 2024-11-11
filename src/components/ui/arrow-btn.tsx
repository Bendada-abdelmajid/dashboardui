import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import React from 'react'

type Props = {
className?:string
}

const ArrowBtn = ({className}: Props) => {
  return (

    <button className={cn("size-7 rounded-full bg-white/10   overflow-hidden hover:bg-black  ease group/btn", className)}>
      <span className='relative size-full grid place-content-center   rotate-[-60deg]'>
      <ArrowRight size={14} strokeWidth={1.4} className="absolute inset-0 p-1 text-secondary-foreground size-full group-hover/btn:translate-x-full ease" />
      <ArrowRight size={14} strokeWidth={1.4} className="absolute inset-0 p-1 text-white size-full -translate-x-full group-hover/btn:translate-x-0 ease" />
      </span>
  </button>
  )
}

export default ArrowBtn