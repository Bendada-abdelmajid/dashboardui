
import { item } from '@/lib/animation'

import React, { ReactNode } from 'react'
import * as motion from 'framer-motion/client';
import { cn } from '@/lib/utils';
type Props = {
  children:ReactNode,
  className?:string,
}


function Card({children, className}: Props) {
  return (
    <motion.div  className={cn("flex flex-col rounded-3xl bg-secondary p-5", className)} variants={item}>{children}</motion.div>
  )
}

export default Card