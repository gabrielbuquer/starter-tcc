import getConfig from 'next/config';

export const getCoreConfig = () => {
  const config = getConfig();
  return { ...config };
};
