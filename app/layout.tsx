import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aaron Sharp Portfolio',
  description: 'My developer portfolio site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-light font-poppins min-h-screen'>{children}</body>
    </html>
  )
}
