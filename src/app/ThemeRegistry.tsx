'use client';

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import createEmotionCache from './createEmotionCache';

/**
 * ThemeRegistry is a CLIENT COMPONENT that ensures MUI
 * (Emotion) styles match between server & client.
 */
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // On the client, create a single Emotion cache
  // On the server, Next may create a new instance per request
  const [cache] = React.useState(() => {
    const _cache = createEmotionCache();
    // 'compat' mode is often recommended in Next 13 for SSR
    _cache.compat = true;
    return _cache;
  });

  // This inserts server-rendered Emotion styles into the <head> so
  // they match the client exactly and avoid hydration mismatches.
  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
