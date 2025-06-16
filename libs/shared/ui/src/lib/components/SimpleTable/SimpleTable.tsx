import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { Props } from './types';

export const SimpleTable = ({ columns, rows, hasTableHead = false }: Props) => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        {hasTableHead && (
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
