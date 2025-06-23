//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const publicRuntimeConfig = {
  publicApi: {
    base: process.env.API_URL,
  },
};

const serverRuntimeConfig = {
  internalApi: {
    base: process.env.API_URL,
  },
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  basePath: '/monetix',
  publicRuntimeConfig,
  serverRuntimeConfig,
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/',
        destination: '/financas',
        permanent: true,
      },
    ];
  },

  compiler: {
    styledComponents: true,
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
