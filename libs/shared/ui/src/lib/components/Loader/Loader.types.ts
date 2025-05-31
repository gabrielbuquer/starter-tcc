export type DirectionType = {
  direction?: 'column' | 'row';
};

export type LoaderProps = DirectionType & {
  isFullScreen?: boolean;
  isFullHeight?: boolean;
};

export type BoxLoaderProps = DirectionType & {
  isFullHeight?: boolean;
};

export type CustomLoaderProps = DirectionType & {
  titleAlly?: string;
  text?: string;
  typographyVariant?: string;
};
