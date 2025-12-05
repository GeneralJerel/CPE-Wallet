import { useEffect } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { CheckCircle } from 'lucide-react'
import { AuthLayout } from '../components/templates/AuthLayout'
import { AuthCard } from '../components/organisms/AuthCard'

export const Route = createFileRoute('/success')({
  component: SuccessPage,
})

function SuccessPage() {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Clear stored email
    sessionStorage.removeItem('verifyEmail')
    
    // Redirect to dashboard after 3 seconds
    const timer = setTimeout(() => {
      navigate({ to: '/' })
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [navigate])
  
  return (
    <AuthLayout>
      <AuthCard onClose={() => navigate({ to: '/' })} showClose={true}>
        {/* Header spacer */}
        <div className="h-14" />
        
        {/* Content */}
        <div className="px-6 py-16 flex flex-col items-center gap-4">
          {/* Success Icon */}
          <div className="w-12 h-12 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" strokeWidth={1.5} />
          </div>
          
          {/* Text */}
          <div className="text-center">
            <h1 className="font-inter font-semibold text-lg text-gray-900 mb-1">
              Success!
            </h1>
            <p className="font-inter text-sm text-gray-500">
              You've successfully created an account.
            </p>
          </div>
        </div>
        
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
