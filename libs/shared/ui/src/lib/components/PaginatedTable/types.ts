export interface Props {
  columns: Column[];
  rows: object[];
  page: number;
  rowsPerPage: number;
  handleChangePage?: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}
