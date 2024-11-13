"use client"
import ArrowBtn from './ui/arrow-btn';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
    MotionValue,
    animate,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import { item } from '@/lib/animation';



const SCALE = 1.7; // max scale factor of an icon
const DISTANCE = 80; // pixels before mouse affects an icon
const NUDGE = 20; // pixels icons are moved away from mouse
const SPRING = {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
};
type User = {
    id:number,
    user: string,
    img: string,

}
const users: User[] = [
    { id: 1, user: "TechSavvy", img: "/user-1.jpg" },
    { id: 2, user: "OceanDreamer", img: "/user-2.jpg" },
    { id: 3, user: "CreativeSpark", img: "/user-3.jpg" },
    { id: 4, user: "NomadSoul", img: "/user-4.jpg" },
    { id: 5, user: "MindfulCoder", img: "/user-5.jpg" }
];


const Transfer = () => {
    const mouseLeft = useMotionValue(-Infinity);
    const mouseRight = useMotionValue(-Infinity);
 
 
    return (
        <motion.div variants={item} className="flex md:col-span-3 flex-col bg-secondary p-5 rounded-3xl  text-secondary-foreground">
            <div className="flex items-start justify-between mb-4">

                <h4 className="text-2xl  font-light">Quike Transfer</h4>


                <ArrowBtn />
            </div>


            <motion.div
                onMouseMove={(e: React.MouseEvent<HTMLElement>) => {
                    
                    const { left, right } = e.currentTarget.getBoundingClientRect();
                    const offsetLeft = e.clientX - left;
                    const offsetRight = right - e.clientX;
                    mouseLeft.set(offsetLeft);
                    mouseRight.set(offsetRight);
                }}
                onMouseLeave={() => {
                    mouseLeft.set(-Infinity);
                    mouseRight.set(-Infinity);
                }}
                className="mx-auto  my-auto  h-16 items-end gap-3 flex relative"
            >


                {users.map((el) => (
                    <AppIcon el={el} key={el.id} mouseLeft={mouseLeft} />
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Transfer


function AppIcon({
    mouseLeft,
    el,
}: {
    mouseLeft: MotionValue;
    el: User;
}) {
    const ref = useRef<HTMLButtonElement>(null);

    const distance = useTransform(() => {
        const bounds = ref.current
            ? { x: ref.current.offsetLeft, width: ref.current.offsetWidth }
            : { x: 0, width: 0 };

        return mouseLeft.get() - bounds.x - bounds.width / 2;
    });

    const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
    const x = useTransform(() => {
        const d = distance.get();
        if (d === -Infinity) {
            return 0;
        } else if (d < -DISTANCE || d > DISTANCE) {
            return Math.sign(d) * -1 * NUDGE;
        } else {
            return (-d / DISTANCE) * NUDGE * scale.get();
        }
    });

    const scaleSpring = useSpring(scale, SPRING);
    const xSpring = useSpring(x, SPRING);
    const y = useMotionValue(0);

    return (
        <Tooltip.Provider delayDuration={0} >
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <motion.button 
                        ref={ref}
                        style={{ x: xSpring, scale: scaleSpring, y }}
                        onClick={() => {
                            animate(y, [0, -40, 0], {
                                repeat: 2,
                                ease: [
                                    [0, 0, 0.2, 1],
                                    [0.8, 0, 1, 1],
                                ],
                                duration: 0.7,
                            });
                        }}
                        className="aspect-square block w-12 rounded-full bg-white/10  overflow-hidden shadow origin-bottom"
                    >
                        <Image src={el.img} alt={el.user} className='size-full object-cover pt-1 object-top' width={50} height={50} />
                    </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        sideOffset={10}
                        className="bg-gray-700 shadow shadow-black border border-gray-600 px-2 py-1.5 text-sm rounded text-white font-medium"
                    >
                        {el.user}
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
