'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  distance?: number;
  duration?: number;
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

const getHiddenState = (direction: NonNullable<RevealProps['direction']>, distance: number) => {
  if (direction === 'left') {
    return { opacity: 0, x: -distance, scale: 0.98, filter: 'blur(10px)' };
  }

  if (direction === 'right') {
    return { opacity: 0, x: distance, scale: 0.98, filter: 'blur(10px)' };
  }

  if (direction === 'down') {
    return { opacity: 0, y: -distance, scale: 0.98, filter: 'blur(10px)' };
  }

  if (direction === 'scale') {
    return { opacity: 0, scale: 0.92, filter: 'blur(12px)' };
  }

  return { opacity: 0, y: distance, scale: 0.98, filter: 'blur(10px)' };
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 28,
  duration = 0.8,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={getHiddenState(direction, distance)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = '' }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.14,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
