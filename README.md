# Minnesota ICE Shooting Incident - Interactive Information Portal

A comprehensive, production-ready website providing verified information about the Minnesota ICE shooting incident. This interactive web application presents factual information from credible sources, featuring an interactive timeline, fact-checking dashboard, and multiple perspectives on the incident.

## Features

### 📊 Interactive Components
- **Interactive Timeline**: Horizontal scrolling timeline with clickable events showing detailed information and source links
- **Fact-Checking Dashboard**: Filterable grid of claims with verification statuses and confidence level indicators
- **Interactive Map**: Visual representation of eyewitness locations relative to the incident
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu

### 📱 Responsive Design
- Mobile-first approach ensuring accessibility on all devices
- Optimized layouts for mobile, tablet, and desktop screens
- Touch-friendly interface elements

### ♿ Accessibility
- WCAG-compliant color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Semantic HTML structure

### 🎨 Design System
- Neutral color scheme with accent colors for interactive elements
- Clear visual hierarchy with color-coded verification indicators
- Professional typography for readability
- Consistent spacing and layout patterns

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Static export ready (SSG)

## Project Structure

```
minnet/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── timeline/            # Timeline page
│   ├── key-facts/           # Key facts page
│   ├── fact-checking/       # Fact-checking dashboard
│   ├── statements/          # Official statements
│   ├── eyewitness/          # Eyewitness accounts with map
│   ├── media/               # Media coverage
│   └── contact/             # Contact and resources
├── components/              # React components
│   ├── Navigation.tsx       # Responsive navigation bar
│   ├── Timeline.tsx         # Interactive timeline component
│   ├── FactCheckingDashboard.tsx
│   ├── EyewitnessMap.tsx   # Interactive map component
│   └── VerificationBadge.tsx
├── data/                    # Data files
│   ├── events.ts           # Timeline events data
│   ├── factChecks.ts       # Fact-checking data
│   ├── statements.ts       # Official statements
│   ├── eyewitness.ts       # Eyewitness accounts
│   └── media.ts            # Media articles
├── specs.md                # Website specifications
└── report.md               # Analytical report (seed content)
```

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ledminh/minnet.git
cd minnet
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Starting Production Server

```bash
npm run start
```

## Content Sections

### 1. Homepage (Overview)
- Executive summary of the incident
- Interactive timeline preview
- Quick links to all sections
- Key statistics overview

### 2. Timeline of Events
- Chronological view of key events (Jan 7-10, 2026)
- Clickable events with detailed descriptions
- Source links for each event

### 3. Key Facts and Claims
- Organized by verification status (Verified, Partially Verified, Not Verified)
- Color-coded reliability indicators
- Source attribution for each claim

### 4. Fact-Checking Dashboard
- Interactive filtering by status and confidence level
- Grid layout with detailed claim cards
- Visual indicators for verification and confidence

### 5. Official Statements
- Statements from Governor Tim Walz
- ICE official statements
- Local law enforcement responses
- Minneapolis Mayor's statement

### 6. Eyewitness Accounts
- Interactive map showing witness locations
- Anonymous witness testimonials
- Context about reliability and perspective

### 7. Media Coverage Summary
- Articles from local, national, and international sources
- Filterable by coverage category
- Different perspectives and editorial focuses

### 8. Contact & Feedback
- Community resources and advocacy groups
- Legal aid information
- Links to relevant organizations

## Verification System

The website uses a dual-indicator system for information reliability:

### Verification Status
- 🟢 **Verified**: Confirmed by multiple reliable sources
- 🟡 **Partially Verified**: Some evidence supports the claim
- 🔴 **Not Verified**: Insufficient evidence to confirm

### Confidence Level
- 🔵 **High**: Strong evidence from credible sources
- 🟠 **Medium**: Some corroboration needed
- ⚪ **Low**: Limited or conflicting evidence

## Data Sources

All information is compiled from verified news sources including:
- MPR News (Minnesota Public Radio)
- PBS NewsHour
- NBC News
- Star Tribune
- CNN
- The Guardian

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Responsive design patterns
- Accessibility best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is an informational resource providing factual information about a public incident. All content is attributed to original sources.

## Disclaimer

This website is an informational resource and does not provide legal advice or represent any official government position. For official statements, please refer to the appropriate government agencies. For legal assistance, please contact qualified legal professionals.

---

Built with Next.js, TypeScript, and Tailwind CSS
