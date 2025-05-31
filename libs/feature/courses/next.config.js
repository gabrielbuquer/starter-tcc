module.exports = {
  configApp: {
    appName: 'starter-tcc',
    appVersion: process.env['NEXT_PUBLIC_APP_VERSION'],
    cdnPath: process.env['NEXT_PUBLIC_CDN_BASE_PATH'],
    baseURL: process.env['NEXT_PUBLIC_BASE_URL'],
    domain: process.env['NEXT_PUBLIC_APP_DOMAIN'],
  },
  publicRuntimeConfig: {
    publicApi: {
      base: '',
    },
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/financas',
        permanent: true,
      },
    ];
  },
};
