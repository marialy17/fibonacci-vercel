// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fibonacci API',
  description: 'API para generar secuencias Fibonacci',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}