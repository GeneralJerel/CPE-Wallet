import { TextareaHTMLAttributes, forwardRef } from 'react'
import { Textarea } from '../atoms/Textarea'

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="font-montserrat font-medium text-sm text-gray-900">
          {label}
        </label>
        <Textarea ref={ref} error={error} {...props} />
      </div>
    )
  }
)

TextareaField.displayName = 'TextareaField'

