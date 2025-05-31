import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

import { Loader } from '../Loader';

import { TableActions, TableFooter } from './PaginatedTable.styled';
import { Props } from './types';

export const PaginatedTable = ({
  columns,
  rows,
  actions,
  page,
  rowsPerPage = 10,
  totalRows = 0,
  loading = false,
  onChangePage,
  onChangeRowsPerPage,
}: Props) => {
  const handleChangePage = (_: unknown, newPage: number) => {
    onChangePage?.(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChangeRowsPerPage?.(event);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      {loading && <Loader isFullScreen={false} />}
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
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
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
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
        <TableFooter>
          {actions && <TableActions>{actions}</TableActions>}

          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={totalRows}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={'Linhas por página'}
            labelDisplayedRows={({ from, to, count }) => {
              return '' + from + '-' + to + ' de ' + count;
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </TableContainer>
    </Paper>
  );
};
