import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';


import Footer from '@/workArea/components/Footer/Footer';
import Header from '@/workArea/components/Header/Header';
import { NextAuthProviderOwnBuild } from './../workArea/nextAuth/nextAuthProvider/provider';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gub-Hostel',
  description: 'Hostel Managment Website',
};


export default function RootLayout(
  // { children, session }
  //   :
  //   { children: React.ReactNode, session: any }

  { children }: { children: React.ReactNode }
) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <NextAuthProviderOwnBuild>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </NextAuthProviderOwnBuild>
        </>
      </body>
    </html>
  );
}