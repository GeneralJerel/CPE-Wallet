import logoImage from './cpe-wallet-logo.png'

export function LogoFull({ className }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="CPE Wallet" 
      className={className}
    />
  )
}
