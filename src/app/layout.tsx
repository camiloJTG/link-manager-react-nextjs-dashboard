import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProviders } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { title: 'Link manager' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <SessionProviders> {children} </SessionProviders>
         </body>
      </html>
   );
}
