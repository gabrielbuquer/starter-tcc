import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { TransactionType } from '@monetix/shared/config';
import { currencyFormatter, dateFormatter } from '@monetix/core-utils';

import { TransactionAction } from '../../components/TransactionAction';

export const rows = (transactions: TransactionType[]) => {
  return transactions?.map((transaction) => ({
    status: <CheckCircleOutlineIcon color="success" />,
    date: dateFormatter(transaction?.date),
    description: transaction?.description ?? 'Transação sem descrição',
    category: transaction?.category?.description ?? 'Categoria não definida',
    value: currencyFormatter(transaction?.value ?? 0),
    actions: <TransactionAction />,
  }));
};
