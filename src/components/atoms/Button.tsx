import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  leftIcon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  leftIcon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-montserrat font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-valhalla text-azure border border-valhalla hover:bg-valhalla-dark focus:ring-valhalla shadow-sm',
    secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-300 shadow-sm',
    ghost: 'text-valhalla hover:bg-gray-100 focus:ring-valhalla',
    danger: 'bg-red-500 text-white border border-red-500 hover:bg-red-600 focus:ring-red-500 shadow-sm',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="w-5 h-5">{leftIcon}</span>}
      {children}
    </button>
  )
}

