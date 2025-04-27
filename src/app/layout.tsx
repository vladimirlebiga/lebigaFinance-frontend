import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'LEBIGA FINANCE',
  description:
    'Key words: finance, investment, consulting, accounting, tax, audit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
