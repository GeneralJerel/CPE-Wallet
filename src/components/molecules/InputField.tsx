import { InputHTMLAttributes, forwardRef } from 'react'
import { Input } from '../atoms/Input'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  rightIcon?: React.ReactNode
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="font-montserrat font-medium text-sm text-gray-900">
          {label}
        </label>
        <Input ref={ref} error={error} {...props} />
      </div>
    )
  }
)

InputField.displayName = 'InputField'

