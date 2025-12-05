import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#0479be] to-[#00b8f1]">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4">
        {children}
      </div>
      
      {/* Footer */}
      <footer className="px-6 py-5 flex items-center justify-between">
        <p className="font-inter text-sm text-azure">
          ©CPE Wallet 2025
        </p>
        <a href="#" className="font-inter text-sm text-azure hover:underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  )
}

