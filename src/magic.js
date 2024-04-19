import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

export const magic = new Magic(import.meta.env.VITE_MAGIC_PUBLISHABLE_KEY, {
  extensions: [new OAuthExtension()],
});
