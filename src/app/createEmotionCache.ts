import createCache from '@emotion/cache';

/**
 * This function creates an Emotion cache with a custom key
 * so MUI can generate consistent class names on server & client.
 */
export default function createEmotionCache() {
  return createCache({ key: 'mui' });
}
