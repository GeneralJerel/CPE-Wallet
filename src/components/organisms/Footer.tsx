import { LogoIcon } from '../../assets/logo-icon'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-[1440px] mx-auto px-12 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <LogoIcon className="h-7 w-auto" />
            <p className="font-inter text-sm text-gray-500">
              © 2026 CPE Wallet. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="font-inter text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-inter text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

