'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, resize = 'vertical', className, ...props }, ref) => {
    const textareaClasses = cn(
      'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent transition-all duration-300',
      error && 'border-red-500 focus:ring-red-500/20',
      resize === 'none' && 'resize-none',
      resize === 'vertical' && 'resize-y',
      resize === 'horizontal' && 'resize-x',
      resize === 'both' && 'resize',
      className
    );

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-accent font-medium text-pacific-evergreen">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
          {...props}
        />
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

Textarea.displayName = 'Textarea';

export default Textarea;
