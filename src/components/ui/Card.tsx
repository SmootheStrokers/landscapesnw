'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
}

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  variant = 'default',
}: CardProps) {
  const baseClasses = 'bg-pure-white rounded-xl transition-all duration-300';
  
  const variants = {
    default: 'shadow-card hover:shadow-premium',
    elevated: 'shadow-premium hover:shadow-strong',
    outlined: 'border-2 border-gray-200 hover:border-forest-sage/50',
    glass: 'glass-effect hover:glass-effect-strong',
  };
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverClasses = hover ? 'transform hover:-translate-y-2 cursor-pointer' : '';
  
  const classes = cn(
    baseClasses,
    variants[variant],
    paddings[padding],
    hoverClasses,
    className
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
