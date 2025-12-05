import { useState, useRef, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Avatar } from '../atoms/Avatar'
import { ProfileDropdown } from './ProfileDropdown'
import { LogoFull } from '../../assets/logo-full'
import { currentUser } from '../../mock-data/user'

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-12 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-6">
            <LogoFull className="h-7 w-auto" />
          </Link>
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Avatar
                src={currentUser.avatar}
                alt={`${currentUser.firstName} ${currentUser.lastName}`}
                size="md"
              />
              <span className="font-montserrat font-medium text-sm text-gray-900">
                {currentUser.firstName} {currentUser.lastName}
              </span>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2">
                <ProfileDropdown onClose={() => setIsDropdownOpen(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

