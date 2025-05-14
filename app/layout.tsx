import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/protected-route';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Know Freedom Impact Dashboard',
  description: 'Track your volunteer impact and rewards',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}