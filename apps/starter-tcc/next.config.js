//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const shouldHaveConfig = process.env.NODE_ENV === 'production';

const publicRuntimeConfig = {
  publicApi: {
    base: process.env.API_URL,
  },
  basePath: process.env.VERCEL ? '' : '/monetix',
};

const serverRuntimeConfig = {
  internalApi: {
    base: process.env.API_URL,
  },
};

const configAssetPrefix = shouldHaveConfig
  ? {
      assetPrefix: '/monetix',
    }
  : {};

const configBasePath = shouldHaveConfig
  ? {
      basePath: '/monetix',
    }
  : {};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  ...configBasePath,
  ...configAssetPrefix,
  publicRuntimeConfig,
  serverRuntimeConfig,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/financas',
        permanent: true,
      },
      {
        source: '/monetix',
        destination: '/monetix/financas',
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
