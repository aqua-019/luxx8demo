import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUXXPOOL Emulation V3',
  description: 'Pixel-faithful recreation of the LUXXPOOL emulation dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
