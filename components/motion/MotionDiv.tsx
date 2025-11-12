'use client';

import { motion, MotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface MotionDivProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export function MotionDiv({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
