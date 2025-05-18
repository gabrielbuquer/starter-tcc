export interface Props {
  columns: Column[];
  rows: object[];
  page: number;
  rowsPerPage: number;
  actions?: React.ReactNode;
  onChangePage?: (event: unknown, newPage: number) => void;
  onChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

export interface RowProps {
  columns: Column[];
  row: object;
}
