import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

type Messages = Record<string, string>;

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale is `unknown`, so await it then narrow to string
  const raw = await requestLocale;
  console.log(routing, 111);

  // Ensure it's actually a string before using it
  const requested = typeof raw === 'string' ? raw : routing.defaultLocale;
  console.log(requested, 333);
  // Now it's safe to call hasLocale
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  console.log(locale, 222);

  const msgModule = (await import(`../../messages/${locale}.json`)) as {
    default: Messages;
  };

  // 2) now msgModule.default is fully typed, so no 'any' lurks here
  const messages = msgModule.default;

  return {
    locale,
    messages,
  };
});
