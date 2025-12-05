# CPE Wallet - Component Documentation

## Atoms

### Button

Primary action button component.

```tsx
import { Button } from '@/components/atoms'

<Button variant="primary" size="md" leftIcon={<Icon />}>
  Click Me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'ghost' | 'danger'`
- `size`: `'sm' | 'md' | 'lg'`
- `leftIcon`: ReactNode (optional)
- All standard button HTML attributes

### Input

Text input component.

```tsx
import { Input } from '@/components/atoms'

<Input placeholder="Enter text" rightIcon={<Icon />} error="Error message" />
```

**Props:**
- `error`: string (optional) - displays error state and message
- `rightIcon`: ReactNode (optional)
- All standard input HTML attributes

### Avatar

Circular profile image.

```tsx
import { Avatar } from '@/components/atoms'

<Avatar src="/path/to/image.jpg" alt="User Name" size="md" />
```

**Props:**
- `src`: string - image URL
- `alt`: string - alt text
- `size`: `'sm' | 'md' | 'lg' | 'xl'`

## Molecules

### InputField

Label + Input combination.

```tsx
import { InputField } from '@/components/molecules'

<InputField 
  label="Email Address" 
  placeholder="email@example.com" 
  type="email"
/>
```

### StatCard

Progress statistic display card.

```tsx
import { StatCard } from '@/components/molecules'

<StatCard value={80} label="Required credits" variant="gray" />
```

**Props:**
- `value`: number
- `label`: string
- `variant`: `'gray' | 'cyan' | 'orange'`

### FileUpload

Drag-and-drop file upload area.

```tsx
import { FileUpload } from '@/components/molecules'

<FileUpload 
  onFileSelect={(file) => console.log(file)} 
  accept="image/*,.pdf" 
  maxSize={5} 
/>
```

## Organisms

### Header

Site header with logo and user menu.

```tsx
import { Header } from '@/components/organisms'

<Header />
```

Includes:
- Logo linking to dashboard
- User avatar with dropdown menu

### Footer

Site footer with links.

```tsx
import { Footer } from '@/components/organisms'

<Footer />
```

### ProfileDropdown

User account menu dropdown.

```tsx
import { ProfileDropdown } from '@/components/organisms'

<ProfileDropdown onClose={() => setOpen(false)} />
```

### CertificationsTable

Data table for displaying certificates.

```tsx
import { CertificationsTable } from '@/components/organisms'

<CertificationsTable certifications={certificationsArray} />
```

### AddCertificateModal

Modal form for adding new certificates.

```tsx
import { AddCertificateModal } from '@/components/organisms'

<AddCertificateModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  onSave={(data) => handleSave(data)}
/>
```

**CertificateFormData Type:**
```ts
interface CertificateFormData {
  title: string
  credits: number
  organization: string
  dateIssued: string
  file: File | null
}
```

