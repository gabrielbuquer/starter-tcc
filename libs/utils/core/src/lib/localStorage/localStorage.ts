/**
 * Returns the current value associated with the given key,
 * or null if the given key does not exist
 *
 * @param {string} key - The name of the key you want to retrieve the value
 */
export function getStorageItem<T>(key: string): T | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const data = window.localStorage?.getItem(key) || '{}';

  return data !== '{}' ? (JSON.parse(data) as T) : null;
}

/**
 * When passed a key name and value, will add that key to localStorage,
 * or update that key's value if it already exists.
 *
 * @param {string} key - The name of the key you want to create/update
 * @param {unknown} value - The value you want to give the key you are creating/updating
 */
export function setStorageItem(key: string, value: unknown) {
  if (typeof window === 'undefined') {
    return;
  }

  const data = JSON.stringify(value);
  window.localStorage?.setItem(key, data);
}

/**
 * When passed a key name, will remove that key to localStorage.
 *
 * @param {string} key - The name of the key you want to remove
 */
export function removeStorageItem(key: string) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage?.removeItem(key);
}
