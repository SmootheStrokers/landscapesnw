'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bounce';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
  text?: string;
}

export default function Loading({
  size = 'md',
  variant = 'spinner',
  color = 'primary',
  className,
  text,
}: LoadingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colors = {
    primary: 'text-forest-sage',
    secondary: 'text-sunset-gold',
    white: 'text-pure-white',
  };

  const Spinner = () => (
    <motion.div
      className={cn(sizes[size], colors[color], 'border-2 border-current border-t-transparent rounded-full')}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );

  const Dots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={cn('w-2 h-2 rounded-full', colors[color])}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );

  const Pulse = () => (
    <motion.div
      className={cn(sizes[size], 'rounded-full', colors[color])}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
    />
  );

  const Bounce = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={cn('w-2 h-2 rounded-full', colors[color])}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return <Dots />;
      case 'pulse':
        return <Pulse />;
      case 'bounce':
        return <Bounce />;
      default:
        return <Spinner />;
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-2', className)}>
      {renderLoader()}
      {text && (
        <p className={cn('text-sm font-accent', colors[color])}>
          {text}
        </p>
      )}
    </div>
  );
}
