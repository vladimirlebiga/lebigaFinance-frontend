import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'nl', 'uk', 'ru'],

  // Used when no locale matches
  defaultLocale: 'en',
});
