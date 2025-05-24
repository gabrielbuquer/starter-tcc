export const generateAcronym = (name: string) => {
  if (!name) return '--';
  const words = name.split(' ');
  const acronym = words
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);

  return acronym;
};
