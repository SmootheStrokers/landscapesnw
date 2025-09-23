'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, iconPosition = 'left', className, ...props }, ref) => {
    const inputClasses = cn(
      'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent transition-all duration-300',
      error && 'border-red-500 focus:ring-red-500/20',
      icon && iconPosition === 'left' && 'pl-12',
      icon && iconPosition === 'right' && 'pr-12',
      className
    );

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-accent font-medium text-pacific-evergreen">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-600">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
