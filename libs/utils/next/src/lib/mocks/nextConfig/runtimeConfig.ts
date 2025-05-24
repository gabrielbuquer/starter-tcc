export const publicRuntimeConfig = {
  baseURL: process.env['NEXT_PUBLIC_BASE_URL'],
  domain: process.env['NEXT_PUBLIC_APP_DOMAIN'],
  cdnPaths: {
    basePath: '',
    staticPath: '',
  },
  appVersion: 'v0.0.0',
};
