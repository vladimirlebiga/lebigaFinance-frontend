import { notFound } from 'next/navigation';
import { supportedLocales } from '@/utils/languageNegotiator';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { locale } = await params;

  // Validate the locale
  if (!supportedLocales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
