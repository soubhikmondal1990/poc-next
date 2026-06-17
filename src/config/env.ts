export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
  environment: process.env.NEXT_PUBLIC_ENV ?? 'local',
} as const;
