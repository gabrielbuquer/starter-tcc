/**
 * Get some headers info which are must be included in some
 * requests to identify the user in the cart flow
 *
 * When run at the server-side will always returns mobile sales channel
 * and authorization. The client-token was stored in local storage and
 * server can't be able to access this information
 *
 * @example
 * import { getClientHeaders } from '@/helpers/getClientHeaders';
 *
 * // returns { 'x-cv-id': 7, 'x_client_token': 'abcd', Authorization: 'abcd' }
 * getClientHeaders();
 */
export const getClientHeaders = () => {
  const Authorization = process.env['NEXT_PUBLIC_API_AUTHORIZATION'] || '';

  const baseConfigTokens = {
    Authorization,
  };

  const requestHeaders = baseConfigTokens;

  return { ...requestHeaders };
};
