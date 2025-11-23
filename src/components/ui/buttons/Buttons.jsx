import React from 'react';

const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '', // for Tailwind users
  style = {}, // for raw CSS users
}) => {
  // Tailwind classes for variants
  const tailwindVariants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  // Tailwind classes for sizes
  const tailwindSizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        className
          ? `${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}` // Tailwind user
          : `custom-btn ${tailwindVariants[variant]} ${tailwindSizes[size]} ${
              disabled ? 'opacity-50 cursor-not-allowed' : ''
            }` // fallback to Tailwind defaults
      }
      style={style} // raw CSS style can override everything
    >
      {label}
    </button>
  );
};

export default Button;
