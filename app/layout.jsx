import { Inter } from 'next/font/google'
import '@styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather App',
  description: 'Weather App for any city with map for Romania',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="sm:p-3 min-h-screen h-full bg-gradient-to-b from-stone-100 to-stone-200 bg-cover flex flex-col">
        {children}
      </body>
    </html>
  )
}
