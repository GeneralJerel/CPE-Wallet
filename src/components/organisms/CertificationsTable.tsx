import { FileText } from 'lucide-react'
import { Certification } from '../../mock-data/certifications'

interface CertificationsTableProps {
  certifications: Certification[]
}

export function CertificationsTable({ certifications }: CertificationsTableProps) {
  return (
    <div className="border border-black/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-6 py-3 bg-white">
        <div className="flex-1 min-w-0">
          <span className="font-montserrat font-semibold text-sm text-gray-700">
            Certificate Title
          </span>
        </div>
        <div className="w-[120px]">
          <span className="font-montserrat font-semibold text-sm text-gray-700">
            Credits
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-montserrat font-semibold text-sm text-gray-700">
            File
          </span>
        </div>
        <div className="w-[200px]">
          <span className="font-montserrat font-semibold text-sm text-gray-700">
            Organization
          </span>
        </div>
        <div className="w-[150px]">
          <span className="font-montserrat font-semibold text-sm text-gray-700">
            Date Issued
          </span>
        </div>
      </div>
      
      {/* Rows */}
      {certifications.map((cert, index) => (
        <div key={cert.id}>
          <div className="h-px bg-black/10" />
          <div 
            className={`flex items-center gap-2.5 px-6 py-2.5 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
            } hover:bg-gray-50 transition-colors`}
          >
            <div className="flex-1 min-w-0 py-2">
              <span className="font-montserrat font-medium text-sm text-cornflower">
                {cert.title}
              </span>
            </div>
            <div className="w-[120px] py-2">
              <span className="font-montserrat font-medium text-sm text-gray-700">
                {cert.credits} credits
              </span>
            </div>
            <div className="flex-1 min-w-0 py-2">
              <div className="flex items-center gap-1">
                <FileText className="w-6 h-6 text-gray-700 flex-shrink-0" />
                <span className="font-montserrat font-medium text-sm text-gray-700 truncate">
                  {cert.fileName}
                </span>
              </div>
            </div>
            <div className="w-[200px] py-2">
              <span className="font-montserrat font-medium text-sm text-gray-700">
                {cert.organization}
              </span>
            </div>
            <div className="w-[150px] py-2">
              <span className="font-montserrat font-medium text-sm text-gray-700">
                {cert.dateIssued}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

