'use client';

import { motion, MotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface MotionH1Props extends MotionProps {
  children: ReactNode;
  className?: string;
}

export function MotionH1({
  children,
  className = '',
  initial = { opacity: 0, y: -20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  ...props
}: MotionH1Props) {
  return (
    <motion.h1
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.h1>
  );
}
