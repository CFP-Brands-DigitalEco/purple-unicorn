import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-200';

  const variantClasses = {
    primary: 'bg-[#4f2170] text-white hover:bg-[#3d1958] hover:shadow-sm hover:scale-105',
    secondary: 'bg-transparent border-2 border-[#4f2170] text-[#4f2170] hover:bg-purple-50',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
