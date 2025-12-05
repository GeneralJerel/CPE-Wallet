interface StatCardProps {
  value: number
  label: string
  variant?: 'gray' | 'cyan' | 'orange'
}

export function StatCard({ value, label, variant = 'gray' }: StatCardProps) {
  const variants = {
    gray: 'bg-progress-gray',
    cyan: 'bg-progress-cyan',
    orange: 'bg-progress-orange',
  }
  
  return (
    <div className={`flex-1 flex flex-col items-center justify-center gap-2.5 p-6 rounded-2xl ${variants[variant]}`}>
      <span className="font-montserrat font-bold text-4xl text-valhalla tracking-tight">
        {value}
      </span>
      <span className="font-montserrat font-medium text-sm text-gray-500">
        {label}
      </span>
    </div>
  )
}

