import { HomePage } from '@/components/Pages/HomePage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main>
      <HomePage />
    </main>
  );
}
