import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

import Footer from '@/workArea/components/Footer/Footer';
import Header from '@/workArea/components/Header/Header';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gub-Hostel',
  description: 'Hostel Mangement Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </>
      </body>
    </html>
  )
}