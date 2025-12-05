import { ReactNode } from 'react'
import { X } from 'lucide-react'

interface AuthCardProps {
  children: ReactNode
  onClose?: () => void
  showClose?: boolean
}

export function AuthCard({ children, onClose, showClose = true }: AuthCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-[360px] overflow-hidden relative">
      {showClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>
      )}
      {children}
    </div>
  )
}

