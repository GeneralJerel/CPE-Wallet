export interface Certification {
  id: string
  title: string
  credits: number
  fileName: string
  organization: string
  dateIssued: string
}

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Advanced Tax Planning Strategies',
    credits: 8,
    fileName: 'tax-planning-cert.pdf',
    organization: 'CPE Provider',
    dateIssued: 'Nov 15, 2024',
  },
  {
    id: '2',
    title: 'Financial Statement Analysis',
    credits: 12,
    fileName: 'financial-analysis.pdf',
    organization: 'CPE Provider',
    dateIssued: 'Nov 15, 2024',
  },
  {
    id: '3',
    title: 'Audit Risk Assessment',
    credits: 6,
    fileName: 'audit-risk.pdf',
    organization: 'CPE Provider',
    dateIssued: 'Nov 15, 2024',
  },
  {
    id: '4',
    title: 'Ethics in Professional Practice',
    credits: 4,
    fileName: 'ethics-course.pdf',
    organization: 'CPE Provider',
    dateIssued: 'Nov 15, 2024',
  },
  {
    id: '5',
    title: 'Business Valuation Fundamentals',
    credits: 10,
    fileName: 'business-valuation.pdf',
    organization: 'CPE Provider',
    dateIssued: 'Nov 15, 2024',
  },
]

export const progressData = {
  required: 80,
  completed: 40,
  remaining: 40,
}

