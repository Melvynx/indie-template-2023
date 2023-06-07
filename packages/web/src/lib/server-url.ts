import { env } from '../env';

export const getServerUrl = () => {
  if (env.NODE_ENV === 'development') {
    return 'http://localhost:4200';
  }

  if (env.VERCEL_ENV === 'preview') {
    if (env.VERCEL_URL) {
      return env.VERCEL_URL.startsWith('http')
        ? env.VERCEL_URL
        : `https://${env.VERCEL_URL}`;
    }

    return 'https://VERCEL_DEFAULT_URL';
  }

  return 'https://DEFAULT_DOMAIN';
};
