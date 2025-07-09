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

export const getCurrentMonth = (): { label: string; value: string } => {
  const now = new Date();
  const year = now.getFullYear();
  const monthIndex = now.getMonth();
  const monthName = monthNamesPtBR[monthIndex];
  const label = `${monthName} / ${year}`;
  const value = `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
  return { label, value };
};

export const getStartAndEndDateFromMonthValue = (value: string) => {
  if (!value) return null;
  const [year, month] = value.split('-').map(Number);

  const startDate = `${year}-${String(month).padStart(2, '0')}-01`;

  const end = new Date(year, month, 0);
  const endDate = end.toISOString().split('T')[0];

  return { 'start-date': startDate, 'end-date': endDate };
};

export const dateFormatter = (date: string): string => {
  if (!date) return '';
  const [year, month, day] = date.split('-').map(Number);
  const localDate = new Date(year, month - 1, day ?? 1);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  };
  return new Date(localDate).toLocaleDateString('pt-BR', options);
};

export const stringToDate = (value: string): Date => {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month - 1, 1 ?? 1);
};
