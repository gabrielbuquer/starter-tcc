import { SWRConfig } from 'swr';

export type SwrFallbackType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type SwrProviderPropsType = {
  swrFallback?: SwrFallbackType;
  children: React.ReactNode;
};

export const SwrProvider = ({
  swrFallback: fallback,
  children,
}: SwrProviderPropsType) => {
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      {children}
    </SWRConfig>
  );
};
