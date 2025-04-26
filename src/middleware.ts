// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// const locales = ['en', 'nl', 'uk', 'ru'];

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // skip Next.js internals & API routes
//   if (pathname.startsWith('/_next') || pathname.includes('.')) return;

//   // if no locale prefix, redirect
//   if (!locales.some((l) => pathname.startsWith(`/${l}`))) {
//     const accept =
//       req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en';
//     const locale = locales.includes(accept) ? accept : 'en';
//     console.log(locale, 111);
//     return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
//   }
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
