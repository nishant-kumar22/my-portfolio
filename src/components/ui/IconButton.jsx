import React from 'react';

function IconButton({ 
  children, 
  href, 
  className = "", 
  variant = "primary",
  size = "md",
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white",
    outline: "border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    icon: "w-12 h-12",
    "icon-lg": "w-14 h-14"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default IconButton;