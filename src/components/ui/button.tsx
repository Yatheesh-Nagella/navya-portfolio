import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, isLoading = false, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide transform hover:scale-105 hover:-translate-y-1 active:scale-95";
    
    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25",
      outline: "border-2 border-white/30 text-white backdrop-blur-md hover:bg-white/10 hover:border-yellow-400",
      ghost: "text-white hover:bg-white/10"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      default: "h-12 px-6 text-sm",
      lg: "h-14 px-8 text-base"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-2 -bottom-2 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 transition-transform duration-700 group-hover:translate-x-[200%]" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {isLoading && (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          )}
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };