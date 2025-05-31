const monthNamesPtBR = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const generateLastNMonths = (
  n: number,
): { label: string; value: string }[] => {
  const result = [];
  const now = new Date();

  for (let i = 0; i < n; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const monthName = monthNamesPtBR[monthIndex];
    const label = `${monthName} / ${year}`;
    const value = `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
    result.push({ label, value });
  }

  return result;
};
