import React from 'react'
import ArrowBtn from './ui/arrow-btn'
import { formatAsCurrency } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'

import Card from './ui/card'



const Expence = () => {
  return (
    <div  className="grid gap-5 md:col-span-3 ">
    <Card className="p-6 relative">
    
      <ArrowBtn className='absolute top-5 right-5'/>
      <span className="text-lg font-extralight">Income</span>
      <div className="flex items-center justify-between mt-4">
        <h4 className="text-3xl font-light">
          {formatAsCurrency(2259.7)}
        </h4>
        <span className="flex items-center gap-1 pl-3 pr-4 py-2 t text-xs rounded-[30px] bg-yellow/30 text-yellow">
          <ChevronUp size={14} fill="currentColor" /> 10%
        </span>
      </div>
    </Card>
    <Card  className="text-secondary-foreground relative">
     
    <ArrowBtn className='absolute top-5 right-5'/>
      <span className="text-lg font-extralight">Expence</span>
      <div className="flex items-center justify-between mt-4">
        <h4 className="text-3xl font-light">
          {formatAsCurrency(1589.65)}
        </h4>
        <span className="flex items-center gap-1 pl-3 pr-4 py-2 text-xs rounded-[30px] bg-yellow/30 text-yellow">
          <ChevronUp size={14} fill="currentColor" /> 10%
        </span>
      </div>
    </Card>
  </div>
  )
}

export default Expence