export const copyToClipBoard = (text: string): boolean => {
  if ('clipboard' in navigator && window.isSecureContext) {
    navigator.clipboard.writeText(text);
    return true;
  }

  return false;
};
