import { useRef, useState, KeyboardEvent, ClipboardEvent } from 'react'

interface CodeInputProps {
  length?: number
  onComplete: (code: string) => void
  isSuccess?: boolean
}

export function CodeInput({ length = 6, onComplete, isSuccess = false }: CodeInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    
    const newValues = [...values]
    newValues[index] = value.slice(-1)
    setValues(newValues)
    
    // Move to next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
    
    // Check if complete
    const code = newValues.join('')
    if (code.length === length && !newValues.includes('')) {
      onComplete(code)
    }
  }
  
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }
  
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, length)
    if (!/^\d+$/.test(pastedData)) return
    
    const newValues = [...values]
    pastedData.split('').forEach((char, i) => {
      if (i < length) newValues[i] = char
    })
    setValues(newValues)
    
    if (pastedData.length === length) {
      onComplete(pastedData)
    }
  }
  
  const borderColor = isSuccess ? 'border-green-500' : 'border-gray-200'
  
  return (
    <div className="flex items-center gap-2.5">
      {values.slice(0, 3).map((value, index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={`w-10 h-12 text-center font-inter text-base text-gray-900 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all`}
        />
      ))}
      
      <span className="font-inter font-semibold text-lg text-gray-900">-</span>
      
      {values.slice(3).map((value, index) => (
        <input
          key={index + 3}
          ref={(el) => { inputRefs.current[index + 3] = el }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index + 3, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index + 3, e)}
          onPaste={handlePaste}
          className={`w-10 h-12 text-center font-inter text-base text-gray-900 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all`}
        />
      ))}
    </div>
  )
}

