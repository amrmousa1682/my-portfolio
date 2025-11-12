'use client';

import { motion, MotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface MotionSectionProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export function MotionSection({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.section>
  );
}
