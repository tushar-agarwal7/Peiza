import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import AuthProvider from '@/components/providers/AuthProvider';
import ToastProvider from '@/components/providers/ToastProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Add Chewy font
const chewy = localFont({
  src: './fonts/Chewy-Regular.ttf', // You'll need to download this
  variable: '--font-chewy',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pieza Dashboard',
  description: 'Modern pizza order management dashboard',
  keywords: ['pizza', 'orders', 'dashboard', 'management'],
  authors: [{ name: 'Pieza Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${chewy.variable}`}>
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          {children}
          <ToastProvider />
        </AuthProvider>
      </body>
    </html>
  );
}
