import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanity Studio | Pathmark Advisory',
  description: 'Content management for Pathmark Advisory',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
