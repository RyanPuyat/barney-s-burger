import { forwardRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      shape = 'soft',
      isLoading = false,
      disabled = false,
      className,
      to,
      ...props
    },
    ref,
  ) => {
    const base =
      'inline-flex items-center justify-center font-semibold transition-colors duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0';

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2 text-base',
      lg: 'px-6 py-4 text-xl',
      round: 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm font-bold',
    };

    const variants = {
      primary: 'bg-orange-500 hover:bg-orange-600 text-white',
      secondary: 'bg-yellow-500 hover:bg-yellow-600 text-white',
      // clear:
      // 'bg-orange-100 hover:bg-orange-200 text-stone-500 border-orange-500',
      outline:
        'border border-gray-400 text-gray-700 hover:bg-gray-200 outline-none focus:outline-none focus:ring-0',
      //   ghost: 'text-gray-700 hover:bg-gray-100',
    };

    const shapeClasses = {
      rectangle: 'rounded-none',
      soft: 'rounded-md',
      pill: 'rounded-full',
    };

    // const shape = rounded ? 'rounded-full' : 'rounded-none';
    const shapeStyle = shapeClasses[shape] || shapeClasses['soft'];

    if (to)
      return (
        <Link
          to={to}
          className={clsx(
            base,
            sizes[size],
            variants[variant],
            shapeStyle,
            disabled && 'cursor-not-allowed opacity-50',
            isLoading && 'relative text-transparent',
            className,
          )}
        >
          {children}
        </Link>
      );

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
        {children}
      </button>
    );
  },
);

export default Button;
