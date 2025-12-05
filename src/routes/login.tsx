import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { AuthLayout } from '../components/templates/AuthLayout'
import { AuthCard } from '../components/organisms/AuthCard'
import logoFull from '../assets/cpe-wallet-logo-full.png'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Store email for verification page
      sessionStorage.setItem('verifyEmail', email)
      navigate({ to: '/verify' })
    }
  }
  
  const isValidEmail = email.includes('@') && email.includes('.')
  
  return (
    <AuthLayout>
      <AuthCard onClose={() => navigate({ to: '/' })} showClose={true}>
        {/* Header */}
        <div className="h-14 flex items-center justify-center">
          <p className="font-inter text-sm text-gray-500">
            Login or sign up
          </p>
        </div>
        
        {/* Logo */}
        <div className="flex justify-center py-6">
          <img 
            src={logoFull} 
            alt="CPE Wallet" 
            className="h-20 w-auto object-contain"
          />
        </div>
        
        {/* Email Form */}
        <form onSubmit={handleSubmit} className="px-6 py-8">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 flex-1">
              <Mail className="w-6 h-6 text-gray-700" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 font-inter text-base text-gray-900 placeholder:text-gray-400 outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={!isValidEmail}
              className={`px-4 py-3 font-inter font-medium text-base transition-colors ${
                isValidEmail 
                  ? 'text-indigo-600 hover:text-indigo-700 cursor-pointer' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          </div>
        </form>
        
        {/* Footer */}
        <div className="px-6 py-4 flex items-center justify-center">
          <p className="font-inter text-xs text-gray-400">
            Protected by <span className="font-medium">privy</span>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  )
}

