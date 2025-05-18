/**
 * Returns if we are running server-side
 *
 * You should avoid using this function and
 * only use it in places where it is strictly necessary
 */
export const isServerSide = () => typeof window === 'undefined';

/**
 * Returns if we are running client-side
 *
 * You should avoid using this function and
 * only use it in places where it is strictly necessary
 */
export const isClientSide = () => typeof window !== 'undefined';

/**
 * Returns if we are running environment dev ( not build)
 *
 */
export const isDevEnv = process.env['NODE_ENV'] !== 'production';

/**
 * Returns if we are running environment production (afterbuild)
 *
 */
export const isProdEnv = process.env['NODE_ENV'] === 'production';

/**
 * Returns if we are running environment storybook
 *
 */
export const isStorybook =
  process?.env?.['NEXT_PUBLIC_IS_STORYBOOK'] === 'true';
