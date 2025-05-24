export type SharedPathsKeyType = 'FINANCES_API' | 'USER_API';

type PublicPathsType = {
  PUBLIC: {
    ROOT: string;
    ASSETS: {
      ROOT: string;
      IMAGES: string;
    };
  };
};

export type SharedPathsType = Record<SharedPathsKeyType, string> &
  PublicPathsType;

export type SharedCorePathsType = SharedPathsType;
