import { HTMLMotionProps } from "framer-motion";

export const slideRight: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
};
export const slideLeft: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
};
export const slideUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: {  duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
};
export const fade: HTMLMotionProps<"div"|"li"|"button"> = {
    initial: { opacity: 0,},
    animate: { opacity: 1, },
    exit: { opacity: 0, },
    transition: {  duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
};
export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    transition: {  duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
  };