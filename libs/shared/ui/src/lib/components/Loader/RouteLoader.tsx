import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Loader from './Loader';

const RouteLoader = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  console.log('RouteLoader mounted');

  useEffect(() => {
    const handleStart = () => {
      console.log('Route change started');
      setLoading(true);
    };

    const handleComplete = () => {
      console.log('Route change started');
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return loading ? <Loader /> : undefined;
};

export default RouteLoader;
