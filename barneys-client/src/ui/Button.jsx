import { forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      shape = 'soft',
      isLoading = false,
      disabled = false,
      iconLeft,
      iconRight,
      className,
      ...props
    },
    ref,
  ) => {
    const base =
      'inline-flex items-center justify-center font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2 text-base',
      lg: 'px-4 py-2 text-5xl',
    };

    const variants = {
      primary: 'bg-orange-500 hover:bg-orange-600 text-white',
      secondary: 'bg-yellow-500 hover:bg-yellow-600 text-white',
      //   outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
      //   ghost: 'text-gray-700 hover:bg-gray-100',
    };

    const shapeClasses = {
      rectangle: 'rounded-none',
      soft: 'rounded-md',
      pill: 'rounded-full',
    };

    // const shape = rounded ? 'rounded-full' : 'rounded-none';
    const shapeStyle = shapeClasses[shape] || shapeClasses['soft'];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          base,
          sizes[size],
          variants[variant],
          shapeStyle,
          disabled && 'cursor-not-allowed opacity-50',
          isLoading && 'relative text-transparent',
          className,
        )}
        {...props}
      >
        {iconLeft && !isLoading && <span className="mr-2">{iconLeft}</span>}
        {isLoading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-orange-100 border-t-transparent" />
          </span>
        ) : (
          children
        )}
        {iconRight && !isLoading && <span className="ml-2">{iconRight}</span>}
      </button>
    );
  },
);

export default Button;
