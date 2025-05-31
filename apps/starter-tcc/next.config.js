//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const publicRuntimeConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/financas',
        permanent: true,
      },
      {
        source: '/professor',
        destination: '/professor/aulas',
        permanent: true,
      },
    ];
  },
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },

  publicRuntimeConfig,

  compiler: {
    styledComponents: true,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
