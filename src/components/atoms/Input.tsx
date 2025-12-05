import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  rightIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, rightIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={`
            w-full h-10 px-3 py-2 
            bg-white border border-gray-200 rounded-lg
            font-inter text-sm text-gray-900 placeholder:text-gray-400
            shadow-sm
            focus:outline-none focus:ring-2 focus:ring-valhalla/20 focus:border-valhalla
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${className}
          `}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

