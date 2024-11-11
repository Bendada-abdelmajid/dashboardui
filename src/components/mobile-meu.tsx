"use client"

import React from 'react'
import { ArrowLeftRight, Bell, ChartColumnIncreasing, ChevronRight, CreditCard, House, Settings, WalletMinimal, X } from 'lucide-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { fade, slideRight } from '@/lib/animation';



const links = [
    {
        url: "/",
        label: "Home",
        Icon: House
    },
    {
        url: "/analytics",
        label: "Analytics",
        Icon: ChartColumnIncreasing
    },
    {
        url: "/transactions",
        label: "Transactions",
        Icon: ArrowLeftRight
    },
    {
        url: "/payments",
        label: "Payments",
        Icon: CreditCard
    },
    {
        url: "/cards",
        label: "Cards",
        Icon: WalletMinimal
    },
];

type Props ={
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenu = ({openMenu, setOpenMenu}:Props) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode='wait' initial={false}>
        {openMenu &&<motion.div key={"overlay"} onClick={()=> setOpenMenu(false)} {...fade as HTMLMotionProps<"div">} className='fixed z-40 bg-black/50 inset-0'></motion.div>}
        {openMenu && <motion.div key={"menu"} {...slideRight} className='h-fit  z-50 flex flex-col  w-full max-w-[320px] fixed top-5 right-5 rounded-2xl bg-secondary'>
      
            <div className="flex items-center justify-between gap-2 py-3 px-5 border-b-2 border-dotted border-white/30">
            <span className='block  opacity-70'>Menu</span>
            <button onClick={()=> setOpenMenu(false)}  className='size-9  grid place-content-center rounded-lg bg-black/20'><X size={20}/></button>
            </div>
        
            <nav className='grid w-52 text-secondary-foreground  pt-5 px-[18px]'>

                {links.map(({ Icon, label, url }) => (
                    <Link href={url} key={label} className={`flex py-3 rounded-xl  px-4 items-center gap-2 text-sm ${pathname == url ? "bg-yellow text-black" : ""} `}>
                        <Icon size={20} strokeWidth={1.4} />
                        <span>{label}</span>
                    </Link>
                ))}
            </nav>
            <div className='mt-auto grid pb-5 px-[18px]'>
                <Link href={"/settings"} className='flex py-3 rounded-3xl  px-4 items-center gap-2 text-sm '>
                    <Settings size={20} strokeWidth={1.4} />
                    Settings</Link>
                <Link href={"/settings"} className='flex py-3 rounded-3xl  px-4 items-center gap-2 text-sm '>
                    <Bell size={20} strokeWidth={1.4} />
                    Notifications</Link>
           
            </div>
            <button className='flex w-full p-5 border-t-2 border-dotted border-white/30 items-center gap-2'>
                    <Image src={"/avatar.jpg"} width={50} height={50} className='size-10 rounded-full border object-cover' alt='user' />
                    <div className='text-left h-fit'>
                        <h4 className='text-sm'>Monika Chris</h4>
                        <small className='opacity-55 block '>monica.chris@gmil.com</small>
                    </div>
                    <ChevronRight size={16} className='ml-auto'/>

                </button>

        </motion.div>}
        </AnimatePresence>
    )
}

export default MobileMenu