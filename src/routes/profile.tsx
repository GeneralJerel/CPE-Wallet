import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../components/atoms/Button'
import { Avatar } from '../components/atoms/Avatar'
import { InputField } from '../components/molecules/InputField'
import { TextareaField } from '../components/molecules/TextareaField'
import { Header, Footer } from '../components/organisms'
import { currentUser } from '../mock-data/user'

export const Route = createFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    phone: currentUser.phone,
    introduction: currentUser.introduction,
  })
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would call an API
    console.log('Saving profile:', formData)
    alert('Profile saved successfully!')
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-28 py-8">
        {/* Page Header */}
        <div className="max-w-[652px] mx-auto mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors mb-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-quicksand text-sm">Back</span>
          </Link>
          
          <h1 className="font-montserrat font-bold text-4xl text-valhalla tracking-tight">
            Manage Profile
          </h1>
          <p className="font-quicksand text-sm text-gray-500 mt-1">
            Update your personal information and contact details.
          </p>
        </div>
        
        {/* Profile Form */}
        <form onSubmit={handleSave} className="max-w-[652px] mx-auto">
          <div className="bg-white rounded-2xl p-6">
            <h2 className="font-montserrat font-medium text-lg text-gray-900 mb-8">
              My Profile
            </h2>
            
            {/* Avatar Section */}
            <div className="flex items-center gap-4 mb-8">
              <Avatar
                src={currentUser.avatar}
                alt={`${currentUser.firstName} ${currentUser.lastName}`}
                size="lg"
              />
              <div className="flex flex-col gap-2">
                <span className="font-montserrat font-medium text-sm text-gray-900">
                  Profile Picture
                </span>
                <Button type="button" variant="secondary" size="sm">
                  Upload New Photo
                </Button>
              </div>
            </div>
            
            {/* Form Fields */}
            <div className="space-y-8">
              {/* Row 1 - Name */}
              <div className="flex gap-6">
                <InputField
                  label="First Name"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="flex-1"
                />
                <InputField
                  label="Last Name"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="flex-1"
                />
              </div>
              
              {/* Row 2 - Contact */}
              <div className="flex gap-6">
                <InputField
                  label="Email Address"
                  placeholder="eg: johndoe@email.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="flex-1"
                />
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-montserrat font-medium text-sm text-gray-900">
                    Phone Number
                  </label>
                  <div className="flex gap-3 items-center">
                    <span className="font-inter text-sm text-gray-900 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                      +1
                    </span>
                    <input
                      type="tel"
                      placeholder="(000) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="flex-1 h-10 px-3 py-2 bg-white border border-gray-200 rounded-lg font-inter text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-valhalla/20 focus:border-valhalla transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
              
              {/* Row 3 - Introduction */}
              <TextareaField
                label="Introduction"
                placeholder="Tell us about yourself"
                rows={5}
                value={formData.introduction}
                onChange={(e) => setFormData(prev => ({ ...prev, introduction: e.target.value }))}
              />
            </div>
            
            {/* Save Button */}
            <div className="flex justify-end mt-8">
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  )
}

