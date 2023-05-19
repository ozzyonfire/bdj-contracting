import '@/styles/globals.css'
import { libre } from '@/lib/fonts';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'BDJ Contracting',
  description: '#1 contractor in the Bay of Quinte area.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = (cookies().get("theme")?.value as 'dark' | 'light') || 'light';
  return (
    <html lang="en" className={theme == 'dark' ? 'dark' : ''}>
      <body className={`${libre.variable}`}>{children}</body>
    </html>
  )
}
