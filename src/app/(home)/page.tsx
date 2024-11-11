
import Balance from "@/components/balance";
import { Budget } from "@/components/budget";
import Credit from "@/components/credit";
import Expence from "@/components/expence";
import Goal from "@/components/goal";

import Savings from "@/components/savings";
import { Spending } from "@/components/spending";
import Transcations from "@/components/transcations";
import Transfer from "@/components/transfer";
import * as motion from 'framer-motion/client';
const container = {
  hidden: { opacity: 1 },
  visible: {

    transition: {
      ease: [0.04, 0.62, 0.23, 0.98],
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};



export default function Home() {
  return (
    <>
      <motion.div
        key={"main-page"}
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-7 xl:grid-cols-12 gap-5 mt-5"
      >
        <Balance />

        <Expence />

        <Credit />
        <Budget />
        <Spending />
        <Transcations />
        <div className="order-2 xl:-order-none md:col-span-7 xl:col-span-5 grid sm:grid-cols-2 gap-5">
          <Goal />
          <Savings />
        </div>
        <Transfer />
      </motion.div>
    </>
  );
}
