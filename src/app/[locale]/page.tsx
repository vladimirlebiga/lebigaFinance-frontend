import { notFound } from 'next/navigation';
import { supportedLocales } from '@/utils/languageNegotiator';
import { HomePage } from '@/components/Pages/HomePage';

export default async function Page({ params }: { params: { locale: string } }) {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { locale } = await params;

  // Validate the locale
  if (!supportedLocales.includes(locale as any)) {
    notFound();
  }

  return (
    <div>
      <HomePage />
    </div>
  );
}
