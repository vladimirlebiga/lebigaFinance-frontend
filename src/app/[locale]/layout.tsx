// // app/[locale]/layout.tsx
// import type { Metadata } from 'next';
// import { IntlProvider } from 'next-intl';

// export const metadata: Metadata = {
//   title: 'LEBIGA FINANCE',
//   description:
//     'Key words: finance, investment, consulting, accounting, tax, audit',
// };

// type Messages = Record<string, string>;

// type Props = {
//   children: React.ReactNode;
//   params: { locale: string };
// };

// export default async function LocaleLayout({ children, params }: Props) {
//   // dynamic import of the locale file
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const imported = await import(`../../messages/${params.locale}.json`);
//   // explicitly cast to a known shape so it’s no longer `any`
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const messages = imported.default as Messages;

//   return (
//     <html lang={params.locale}>
//       <head>
//         {/* custom fonts, icons, etc */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body>
//         <IntlProvider locale={params.locale} messages={messages}>
//           {children}
//         </IntlProvider>
//       </body>
//     </html>
//   );
// }

// 'use client';
import { NextIntlClientProvider } from 'next-intl';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      // defaultLocale={routing.defaultLocale}
    >
      {children}
    </NextIntlClientProvider>
  );
}
