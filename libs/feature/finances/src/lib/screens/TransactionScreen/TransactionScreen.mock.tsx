import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { TransactionAction } from '../../components/TransactionAction/TransactionAction';

export const rows = [
  {
    status: <CheckCircleOutlineIcon color="success" />,
    date: '10/10/2023',
    description: 'Aluguel - Casa',
    category: 'Casa',
    value: 1200,
    actions: <TransactionAction />,
  },
  {
    status: <ErrorOutlineIcon color="error" />,
    date: '10/10/2023',
    description: 'Mercado - Compras',
    category: 'Alimentação',
    value: 400,
    actions: <TransactionAction />,
  },
];
