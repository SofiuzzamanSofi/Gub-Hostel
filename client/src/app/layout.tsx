"use client"

import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';


import Footer from '@/workArea/components/Footer/Footer';
import Header from '@/workArea/components/Header/Header';
import { SessionProvider } from "next-auth/react"


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gub-Hostel',
  description: 'Hostel Managment Website',
};






export default function RootLayout(
  { children, session }
    :
    { children: React.ReactNode, session: any }
) {




  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <SessionProvider session={session}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </SessionProvider>
        </>
      </body>
    </html>
  );
}
