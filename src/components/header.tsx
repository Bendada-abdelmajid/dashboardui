"use client"
import { ArrowLeftRight, Bell, ChartColumnIncreasing, CreditCard, House, WalletMinimal } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import SliderIcon from './ui/slider-icon';

import MobileMenu from './mobile-meu';
import { fade, slideLeft, slideRight } from '@/lib/animation';
import { HTMLMotionProps, motion } from 'framer-motion';

const links = [

    {
        id: 10,
        url: "/",
        label: "Home",
        Icon: House
    },
    {
        id: 11,
        url: "/analytics",
        label: "Analytics",
        Icon: ChartColumnIncreasing
    },
    {
        id: 12,
        url: "/transactions",
        label: "Transactions",
        Icon: ArrowLeftRight
    },
    {
        id: 13,
        url: "/payments",
        label: "Payments",
        Icon: CreditCard
    },
    {
        id: 14,
        url: "/cards",
        label: "Cards",
        Icon: WalletMinimal
    },
];

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const pathname = usePathname()

    return (
        <>
         <header  className='flex sticky top-0 z-10 bg-background py-5 items-center justify-between gap-3'>
            <motion.div {...slideLeft}>
                <Link href="/" className='flex items-center gap-2'>
                <div className='size-9 bg-yellow text-background font-bold text-xl  rounded-lg flex items-center justify-center'>
                    <span className='block -mr-0.5'>F</span>
                    <span className='block -ml-0.5'>F</span>
                </div>
                <h4 className='text-lg'>Fine Flex</h4>
            </Link>
            </motion.div>
            <motion.nav key={"nav"} initial={{ clipPath: "inset(0px 50% 0px 50%)" }} transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                animate={{ clipPath: "inset(0px 0% 0px 0%)" }} className='hidden overflow-hidden 2lg:flex items-center bg-secondary text-secondary-foreground rounded-3xl  gap-3'>

                {links.map(({ Icon, label, url, id }) => (
                    <Link href={url} key={id} className={`flex py-3 rounded-3xl  px-5 items-center gap-2 text-sm ${pathname == url ? "bg-yellow text-black" : ""} `}>
                        <Icon size={20} strokeWidth={1.4} />
                        <span>{label}</span>
                    </Link>
                ))}

            </motion.nav>
            <motion.div {...slideRight} className='hidden 2lg:flex  items-center  gap-3'>
                <button className='size-10 grid place-content-center rounded-full  overflow-hidden bg-secondary'>
                    <Bell size={20} strokeWidth={2} />
                </button>
                <button className='size-10 grid place-content-center rounded-full  overflow-hidden bg-secondary'>
                    <SliderIcon />
                </button>
                <button className='size-10 rounded-full border overflow-hidden border-secondary'>
                    <Image src={"/avatar.jpg"} width={50} height={50} className='size-full object-cover' alt='user' />

                </button>
            </motion.div>
            <motion.button key="button" {...fade as HTMLMotionProps<"button">} onClick={() => setOpenMenu(true)} className='flex 2lg:hidden items-center gap-2 '>

                <span className='text-sm capitalize'>menu</span>

            </motion.button>
        </header>
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        </>
       
    )
}

export default Header