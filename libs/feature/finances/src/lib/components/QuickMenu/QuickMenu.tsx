import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import {
  AdsClickOutlined,
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  AutoGraphOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

import { useTransactionForm } from '../../contexts/FinanceContext';

export const QuickMenu = () => {
  const { push } = useRouter();
  const { openForm } = useTransactionForm();

  const actions = [
    {
      icon: <AdsClickOutlined />,
      name: 'Metas',
      onClick: () => push('/financas/metas'),
    },
    {
      icon: <AutoGraphOutlined />,
      name: 'Gráficos',
      onClick: () => push('/financas'),
    },
    {
      icon: <ArrowDownwardOutlined color="error" />,
      name: 'Adicionar despesa',
      onClick: () => openForm('expense'),
    },
    {
      icon: <ArrowUpwardOutlined color="success" />,
      name: 'Adicionar receita',
      onClick: () => openForm('income'),
    },
  ];

  return (
    <SpeedDial
      ariaLabel="Navegação rápida"
      sx={{ position: 'fixed', bottom: 42, right: 24 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};
