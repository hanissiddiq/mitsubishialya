import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dipo Mitsubishi Medan | Dealer Resmi Mitsubishi Motors',
  description: 'Temukan pilihan Mitsubishi terbaik, promo terbaru, dan layanan terpercaya di Dipo Mitsubishi Medan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
