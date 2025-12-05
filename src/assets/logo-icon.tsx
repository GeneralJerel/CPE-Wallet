import logoIcon from './cpe-wallet-icon.png'

export function LogoIcon({ className }: { className?: string }) {
  return (
    <img 
      src={logoIcon} 
      alt="CPE Wallet" 
      className={className}
    />
  )
}
