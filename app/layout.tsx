import type { Metadata } from 'next'
import { Crimson_Text, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const crimsonText = Crimson_Text({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  display: 'swap'
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Caleb Cohoe - Professor of Philosophy',
  description: 'Professor of Philosophy and Chair of the Philosophy Department at Metropolitan State University of Denver. Ancient philosophy, medieval philosophy, and philosophy of religion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={crimsonText.className}>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-base">
              © 2024 Caleb Cohoe | Professor of Philosophy | 
              <a href="http://msudenver.edu/philosophy" className="text-gray-200 hover:text-white ml-1 underline">
                Metropolitan State University of Denver
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}