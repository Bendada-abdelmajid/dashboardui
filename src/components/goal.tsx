"use client"
import React, { useState } from 'react'
import ArrowBtn from './ui/arrow-btn'

import { formatNumber, formatAsCurrency } from '@/lib/utils';

import Card from './ui/card';



const myGole = 3000;

function Goal() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [budget, setBudget] = useState(1500)
    const percentage = ( budget* 100) /myGole
    return (
        <Card  className='relative overflow-hidden '>
            <span style={{width:`${percentage}%`}} className='block absolute top-0 left-0 h-full bg-yellow/10'/>
        <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="text-2xl mb-1 font-light text-secondary-foreground">My Goal</h4>
                    <p className='text-yellow'>{percentage}% Completed</p>
                </div>
                <ArrowBtn />
            </div>
            <div className="flex mt-auto items-end gap-0.5">
                <span className='block text-4xl'>{formatAsCurrency(budget)} </span>
                <span className='opacity-65'>/{formatNumber(myGole)} </span>
            </div>
        </div>
        </Card>
    )
}

export default Goal