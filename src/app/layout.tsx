import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
// import { Header } from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'LEBIGA FINANCE',
  description: 'LEBIGA FINANCE',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* For example: custom fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Wrap everything in our Providers component */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
