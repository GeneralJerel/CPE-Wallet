import { useState } from 'react'
import { X, Calendar } from 'lucide-react'
import { Button } from '../atoms/Button'
import { InputField } from '../molecules/InputField'
import { FileUpload } from '../molecules/FileUpload'

interface AddCertificateModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: CertificateFormData) => void
}

export interface CertificateFormData {
  title: string
  credits: number
  organization: string
  dateIssued: string
  file: File | null
}

export function AddCertificateModal({ isOpen, onClose, onSave }: AddCertificateModalProps) {
  const [formData, setFormData] = useState<CertificateFormData>({
    title: '',
    credits: 0,
    organization: '',
    dateIssued: '',
    file: null,
  })
  
  if (!isOpen) return null
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    setFormData({ title: '', credits: 0, organization: '', dateIssued: '', file: null })
    onClose()
  }
  
  const handleFileSelect = (file: File) => {
    setFormData(prev => ({ ...prev, file }))
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-[600px] mx-4 p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        {/* Header */}
        <div className="mb-9">
          <h2 className="font-montserrat font-bold text-xl text-gray-800 tracking-tight">
            Add Certificate
          </h2>
          <p className="font-quicksand text-base text-gray-600 mt-1">
            Upload a new CPE certificate to track your progress
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1 */}
          <div className="flex gap-6">
            <InputField
              label="Certificate Title"
              placeholder="e.g., Advanced Tax Planning"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="flex-1"
            />
            <InputField
              label="Credits"
              placeholder="e.g., 8"
              type="number"
              min={0}
              value={formData.credits || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, credits: parseInt(e.target.value) || 0 }))}
              className="w-[128px]"
            />
          </div>
          
          {/* Row 2 */}
          <div className="flex gap-6">
            <InputField
              label="Organization"
              placeholder="e.g., CPE Provider, University, etc."
              value={formData.organization}
              onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
              className="flex-1"
            />
            <InputField
              label="Date Issued"
              placeholder="Select date"
              type="date"
              value={formData.dateIssued}
              onChange={(e) => setFormData(prev => ({ ...prev, dateIssued: e.target.value }))}
              rightIcon={<Calendar className="w-5 h-5" />}
              className="flex-1"
            />
          </div>
          
          {/* Row 3 - File Upload */}
          <div className="space-y-2">
            <label className="font-montserrat font-medium text-sm text-gray-900">
              Upload Certificate
            </label>
            <FileUpload onFileSelect={handleFileSelect} />
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-6">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Certificate
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

