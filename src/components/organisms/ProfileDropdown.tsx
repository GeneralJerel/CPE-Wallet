import { Link } from '@tanstack/react-router'
import { User, SlidersHorizontal, LogOut } from 'lucide-react'

interface ProfileDropdownProps {
  onClose: () => void
}

export function ProfileDropdown({ onClose }: ProfileDropdownProps) {
  return (
    <div className="w-[180px] bg-white border border-black/10 rounded-lg shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-black/10">
        <p className="font-montserrat font-semibold text-sm text-black">
          My Account
        </p>
      </div>
      
      <div className="py-1">
        <Link
          to="/profile"
          onClick={onClose}
          className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-50 transition-colors"
        >
          <User className="w-6 h-6 text-gray-700" />
          <span className="font-montserrat font-medium text-sm text-black">
            Profile
          </span>
        </Link>
        
        <button
          className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="w-6 h-6 text-gray-700" />
          <span className="font-montserrat font-medium text-sm text-black">
            Settings
          </span>
        </button>
      </div>
      
      <div className="border-t border-black/10 py-1">
        <button
          className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-6 h-6 text-red-500" />
          <span className="font-montserrat font-medium text-sm text-red-500">
            Log out
          </span>
        </button>
      </div>
    </div>
  )
}

