import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WAD Gacha Game',
  description: 'Jeu de type Gacha - Projet WAD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
