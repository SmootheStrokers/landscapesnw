'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  loading = false,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-accent font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-forest-sage hover:bg-mountain-moss text-pure-white shadow-lg hover:shadow-xl focus:ring-forest-sage/20',
    secondary: 'bg-sunset-gold hover:bg-rain-blue text-pure-white shadow-lg hover:shadow-xl focus:ring-sunset-gold/20',
    outline: 'border-2 border-forest-sage text-forest-sage hover:bg-forest-sage hover:text-pure-white focus:ring-forest-sage/20',
    ghost: 'text-forest-sage hover:bg-forest-sage/10 focus:ring-forest-sage/20',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-8 py-4 text-base min-h-[48px]',
    lg: 'px-12 py-6 text-lg min-h-[56px]',
  };
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  const buttonContent = (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...props}
      >
        {loading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        )}
        {children}
      </motion.a>
    );
  }

  return buttonContent;
}
