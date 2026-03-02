import './globals.css'

export const metadata = {
  title: 'Rohit Kanojia — Delivery & Ops Leader',
  description: 'Senior Technical Delivery Lead with 15+ years in Enterprise SaaS, UCaaS, Cloud/On-Prem analytics, and partner management.',
  keywords: 'Rohit Kanojia, Technical Delivery Lead, SaaS, UCaaS, Enterprise Support, Tollring',
  openGraph: {
    title: 'Rohit Kanojia — Delivery & Ops Leader',
    description: 'Enterprise SaaS & Hybrid Support Specialist with 15+ years of impact',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
