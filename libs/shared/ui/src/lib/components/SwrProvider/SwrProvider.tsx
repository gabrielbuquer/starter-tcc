import { SWRConfig } from 'swr';

export type SwrFallbackType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type SwrProviderPropsType =
  | {
      swrFallback?: SwrFallbackType;
      children: React.ReactNode;
      disableSWRManager?: never;
    }
  | {
      swrFallback?: never;
      children: React.ReactNode;
      disableSWRManager?: boolean;
    };

export const SwrProvider = ({
  swrFallback: fallback,
  children,
}: SwrProviderPropsType) => {
  return fallback ? (
    <SWRConfig
      value={{
        provider: () => new Map(),
        revalidateIfStale: false,
        revalidateOnFocus: false,
        fallback,
      }}
    >
      {children}
    </SWRConfig>
  ) : (
    <SWRConfig
      value={{
        provider: () => new Map(),
        revalidateIfStale: false,
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
