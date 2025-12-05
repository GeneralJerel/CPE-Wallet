# CPE Wallet - Technical Architecture

## Project Structure

```
src/
├── assets/              # Logo and static SVG components
│   ├── logo-full.tsx
│   └── logo-icon.tsx
├── components/          # Atomic design component structure
│   ├── atoms/          # Basic building blocks
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   └── index.ts
│   ├── molecules/      # Combinations of atoms
│   │   ├── FileUpload.tsx
│   │   ├── InputField.tsx
│   │   ├── StatCard.tsx
│   │   ├── TextareaField.tsx
│   │   └── index.ts
│   └── organisms/      # Complex UI components
│       ├── AddCertificateModal.tsx
│       ├── CertificationsTable.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── ProfileDropdown.tsx
│       └── index.ts
├── mock-data/          # Mock API data
│   ├── certifications.ts
│   └── user.ts
├── routes/             # TanStack Router file-based routes
│   ├── __root.tsx
│   ├── index.tsx       # Dashboard page
│   └── profile.tsx     # Profile management page
├── index.css           # Global styles and Tailwind imports
└── main.tsx            # Application entry point
```

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `valhalla` | `#242343` | Primary brand color, buttons, headings |
| `azure` | `#F9FFFF` | Light text on dark backgrounds |
| `cornflower` | `#414277` | Links and interactive text |
| `sky-accent` | `#00B8F1` | Accent color, icons |
| `progress-gray` | `#ececec` | Required credits card |
| `progress-cyan` | `#daf6ff` | Completed credits card |
| `progress-orange` | `#ffecda` | Remaining credits card |

### Typography

| Font | Usage |
|------|-------|
| Montserrat | Headings, labels, buttons |
| Quicksand | Subtitles, descriptions |
| Inter | Body text, form inputs |

## Component Architecture

### Atomic Design Pattern

1. **Atoms** - Smallest components (Button, Input, Avatar)
2. **Molecules** - Combinations of atoms (InputField, StatCard)
3. **Organisms** - Complex components (Header, CertificationsTable, AddCertificateModal)
4. **Templates** - Page layouts (implemented in route components)
5. **Pages** - Route-specific implementations

### State Management

Currently using React's built-in `useState` for local state. For future scaling:
- Consider Zustand or TanStack Query for server state
- Context API for global UI state (themes, modals)

## Routing

Using TanStack Router with file-based routing:

- `/` - Dashboard (index.tsx)
- `/profile` - Profile management (profile.tsx)

## Build & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Future Considerations

### Backend Integration
- Replace mock-data with API calls
- Implement authentication
- Add certificate validation

### Features
- Settings page
- Certificate deletion/editing
- Export functionality
- Multi-state requirement tracking

