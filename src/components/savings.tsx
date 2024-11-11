import React from 'react'
import ArrowBtn from './ui/arrow-btn'
import { formatAsCurrency } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
import Card from './ui/card'



const Savings = () => {
    return (
        <Card key={"Savings"}>
            <div className="flex items-start justify-between mb-2">
               
                    <h4 className="text-2xl  font-light text-secondary-foreground">Savings</h4>
               
              
                <ArrowBtn />
            </div>
            <span className="flex mb-4 w-fit items-center gap-1 pl-3 pr-4 py-2  text-xs rounded-[30px] bg-yellow/30 text-yellow">
                <ChevronUp size={14} fill="currentColor" /> 8.5%
              </span>

            <span className='block text-4xl mt-auto'>{formatAsCurrency(1687)} </span>

        </Card>
    )
}

export default Savings