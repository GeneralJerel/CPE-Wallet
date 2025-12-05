export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  introduction: string
  avatar: string
}

export const currentUser: User = {
  id: '1',
  firstName: 'Daniel',
  lastName: 'Jacobs',
  email: 'daniel.jacobs@email.com',
  phone: '(555) 123-4567',
  introduction: 'Certified Public Accountant with over 10 years of experience in tax planning and financial analysis. Committed to continuous professional education and staying current with industry best practices.',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
}

