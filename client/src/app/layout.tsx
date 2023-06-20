import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';


import Footer from '@/workArea/components/Footer/Footer';
import Header from '@/workArea/components/Header/Header';
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth';
import { ReactNode } from 'react';
import type { AppProps } from "next/app";



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gub-Hostel',
  description: 'Hostel Managment Website',
};




type RootLayoutProps = {
  Component: React.ComponentType<any>;
  pageProps: {
    session: Session | null;
    [key: string]: any;
  };
  children?: ReactNode;
};



export default function RootLayout({ Component, pageProps: { pageProps } }: AppProps) {
  return (
    <>

      {/* <SessionProvider session={session}>
            <Header />
            <Component {...pageProps} >
            </Component>
            {children}
            <Footer />
            <Toaster />
          </SessionProvider> */}

      <SessionProvider>

        <Component {...pageProps} >
          <Header />
          <Footer />
          <Toaster />
        </Component>

      </SessionProvider>


    </>
  );
}
