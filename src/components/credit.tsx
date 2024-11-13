import React from 'react'
import VisaIcon from './ui/visa-icon'
import { Plus } from 'lucide-react'
import { formatAsCurrency } from '@/lib/utils';

import Card from './ui/card';



const Credit = () => { 
     const credit = formatAsCurrency(4568).split(".");
    return (
        <Card className="md:col-span-3 xl:col-span-4 rounded-3xl  flex  flex-col-reverse xl:flex-row items-center p-0 bg-transparent  overflow-hidden relative">
            <span className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-2/3 blur-[60px] block size-[300px] rounded-full gradient-2 " />
            <div className="p-7 w-full rounded-3xl relative border border-[#4c4c4c] h-full gap-6 flex flex-col justify-between ">
                <button className="absolute top-7 right-7 text-background grid place-content-center size-16 rounded-full bg-yellow">
                    <Plus />
                </button>
                <span className="text-2xl font-light text-secondary-foreground">Credit</span>
                <h4 className="">
                    <span className="text-6xl inline-block">{credit[0]}.</span>
                    <span className="text-2xl inline-block opacity-60">
                        {credit[1]}
                    </span>
                </h4>
                <div className="flex items-end justify-between">
                    <div className="flex items-center gap-5 text-secondary-foreground">
                        <span>*8967</span>
                        <span>05/27</span>
                    </div>
                    <div className="h-12 w-[120px] relative">
                        <VisaIcon
                            className="absolute top-1/2 -translate-y-1/2"
                            size={120}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-secondary relative rounded-t-3xl xl:rounded-tl-none xl:rounded-r-3xl h-14 flex items-center justify-between px-5 xl:px-0 xl:h-[90%] w-[90%] xl:w-14">
                <span className="xl:absolute top-5 h-12 origin-bottom-left xl:rotate-90 text-sm  xl:-translate-y-12  grid place-content-center left-0 text-secondary-foreground/ ">Universal </span>
                <h4 className="text-sm xl:absolute bottom-10 h-12 origin-bottom-left xl:rotate-90  xl:-translate-y-full  flex items-center left-0 text-secondary-foreground">
                    <span className="inline-block">{credit[0]}.</span>
                    <span className="inline-block opacity-60">
                        {credit[1]}
                    </span>
                </h4>

            </div>
        </Card>
    )
}

export default Credit