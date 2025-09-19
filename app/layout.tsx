import type { Metadata } from 'next'
import { Crimson_Text, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const crimsonText = Crimson_Text({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-crimson'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
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
    <html lang="en">
      <body className={`${crimsonText.variable} ${inter.variable} font-serif`}>
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <footer className="bg-slate-800 text-slate-300 py-8 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm">
              © 2024 Caleb Cohoe | Professor of Philosophy | 
              <a href="http://msudenver.edu/philosophy" className="text-slate-200 hover:text-white ml-1">
                Metropolitan State University of Denver
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}