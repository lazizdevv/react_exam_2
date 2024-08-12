import React from "react";

export const Button = ({

  variant = "primary",
  onClick,
  type,
  children,
  className = "",
  startIcon,
  endIcon,
  ...rest
  
}) => {
  const baseStyle = "px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "text-secondary hover:bg-secondary/10 focus:ring-secondary",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    success: "bg-success text-white hover:bg-success/90 focus:success/90",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",
    special: "bg-special text-primary hover:bg-secondary/10 hover:text-white focus:ring-primary",
  };

  const variantStyle = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {startIcon}{children}{endIcon}
    </button>
  );
};
