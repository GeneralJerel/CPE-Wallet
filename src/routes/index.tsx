import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import { Button } from '../components/atoms/Button'
import { StatCard } from '../components/molecules/StatCard'
import { Header, Footer, CertificationsTable, AddCertificateModal } from '../components/organisms'
import type { CertificateFormData } from '../components/organisms'
import { certifications, progressData } from '../mock-data/certifications'

export const Route = createFileRoute('/')({
  component: Dashboard,
})

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [certs, setCerts] = useState(certifications)
  
  const handleSaveCertificate = (data: CertificateFormData) => {
    const newCert = {
      id: String(certs.length + 1),
      title: data.title,
      credits: data.credits,
      fileName: data.file?.name || 'certificate.pdf',
      organization: data.organization,
      dateIssued: new Date(data.dateIssued).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }
    setCerts([newCert, ...certs])
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-28 py-12">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="font-montserrat font-bold text-4xl text-valhalla tracking-tight">
            Dashboard
          </h1>
          <p className="font-quicksand text-sm text-gray-500 mt-1">
            Track your CPE certifications and progress.
          </p>
        </div>
        
        {/* Progress Section */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="font-montserrat font-semibold text-lg text-gray-900 mb-2.5">
            My Progress
          </h2>
          <div className="flex gap-2.5">
            <StatCard
              value={progressData.required}
              label="Required credits"
              variant="gray"
            />
            <StatCard
              value={progressData.completed}
              label="Completed credits"
              variant="cyan"
            />
            <StatCard
              value={progressData.remaining}
              label="Remaining credits"
              variant="orange"
            />
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="bg-white rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2.5">
            <h2 className="font-montserrat font-semibold text-lg text-gray-900">
              My Certifications
            </h2>
            <Button
              variant="primary"
              leftIcon={<Plus className="w-5 h-5" />}
              onClick={() => setIsModalOpen(true)}
            >
              Add Certificate
            </Button>
          </div>
          
          <CertificationsTable certifications={certs} />
        </section>
      </main>
      
      <Footer />
      
      <AddCertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCertificate}
      />
    </div>
  )
}

