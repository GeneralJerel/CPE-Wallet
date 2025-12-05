import { useCallback, useState } from 'react'
import { CloudUpload } from 'lucide-react'

interface FileUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
  maxSize?: number // in MB
}

export function FileUpload({ onFileSelect, accept = 'image/*,.pdf', maxSize = 5 }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.size <= maxSize * 1024 * 1024) {
      setSelectedFile(file)
      onFileSelect(file)
    }
  }, [maxSize, onFileSelect])
  
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= maxSize * 1024 * 1024) {
      setSelectedFile(file)
      onFileSelect(file)
    }
  }, [maxSize, onFileSelect])
  
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        relative w-full p-5 
        border border-gray-200 rounded-md
        bg-white
        flex flex-col items-center gap-3
        cursor-pointer
        transition-all duration-200
        ${isDragging ? 'border-sky-accent bg-sky-accent/5' : 'hover:border-gray-300'}
      `}
    >
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      <CloudUpload className="w-8 h-8 text-sky-accent" />
      
      <div className="text-center">
        {selectedFile ? (
          <p className="font-montserrat font-medium text-base text-gray-900">
            {selectedFile.name}
          </p>
        ) : (
          <>
            <p className="font-montserrat font-medium text-base text-gray-900">
              Upload a file<span className="text-gray-500"> or drag and drop</span>
            </p>
            <p className="font-quicksand text-sm text-gray-500 mt-1">
              PNG, JPG, GIF up to {maxSize}MB
            </p>
          </>
        )}
      </div>
    </div>
  )
}

