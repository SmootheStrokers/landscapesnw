'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-accent font-medium rounded-full';
  
  const variants = {
    default: 'bg-forest-sage text-pure-white',
    success: 'bg-green-500 text-pure-white',
    warning: 'bg-sunset-gold text-pure-white',
    error: 'bg-red-500 text-pure-white',
    info: 'bg-rain-blue text-pure-white',
    outline: 'border-2 border-forest-sage text-forest-sage bg-transparent',
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <span className={classes}>
      {children}
    </span>
  );
}
