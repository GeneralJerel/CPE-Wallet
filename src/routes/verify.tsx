import { useState, useEffect } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { AuthLayout } from '../components/templates/AuthLayout'
import { AuthCard } from '../components/organisms/AuthCard'
import { CodeInput } from '../components/molecules/CodeInput'

export const Route = createFileRoute('/verify')({
  component: VerifyPage,
})

function VerifyPage() {
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('verifyEmail')
    if (storedEmail) {
      setEmail(storedEmail)
    } else {
      navigate({ to: '/login' })
    }
  }, [navigate])
  
  const handleCodeComplete = (code: string) => {
    console.log('Code entered:', code)
    setIsVerifying(true)
    
    // Simulate verification
    setTimeout(() => {
      setIsSuccess(true)
      
      // Navigate to success after showing success state
      setTimeout(() => {
        navigate({ to: '/success' })
      }, 1500)
    }, 500)
  }
  
  const handleResendCode = () => {
    // Simulate resend
    alert('Code resent to ' + email)
  }
  
  return (
    <AuthLayout>
      <AuthCard onClose={() => navigate({ to: '/login' })} showClose={true}>
        {/* Header spacer */}
        <div className="h-14" />
        
        {/* Content */}
        <div className="px-6 pt-4 pb-8">
          {/* Icon & Title */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center">
              <Mail className="w-12 h-12 text-gray-800" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h1 className="font-inter font-semibold text-lg text-gray-900 mb-2">
                Enter confirmation code
              </h1>
              <p className="font-inter text-sm text-gray-600">
                Please check {email || 'your email'} for a message with your login code.
              </p>
            </div>
          </div>
          
          {/* Code Input */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <CodeInput 
              onComplete={handleCodeComplete} 
              isSuccess={isSuccess}
            />
            {isSuccess && (
              <p className="font-inter text-sm text-green-600 mt-2">
                Success.
              </p>
            )}
            {isVerifying && !isSuccess && (
              <p className="font-inter text-sm text-gray-500 mt-2">
                Verifying...
              </p>
            )}
          </div>
          
          {/* Resend */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="font-inter text-sm text-gray-700">
              Didn't get an email?
            </span>
            <button 
              onClick={handleResendCode}
              className="font-inter font-medium text-sm text-indigo-600 hover:text-indigo-700"
            >
              Resend code
            </button>
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
