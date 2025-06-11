import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; 
import Navbar from './(components)/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'A simple app to log your favorite movies with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}