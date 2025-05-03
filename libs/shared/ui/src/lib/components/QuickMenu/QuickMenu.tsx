import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

import { ArrowUpwardOutlined, ArrowDownwardOutlined, AutoGraphOutlined, AdsClickOutlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export const QuickMenu = () => {
  const { push } = useRouter();

  const actions = [
    { icon: <AdsClickOutlined />, name: 'Metas', onClick: () => push('/financas/metas') },
    { icon: <AutoGraphOutlined />, name: 'Gráficos', onClick: () => push('/financas')},
    { icon: <ArrowDownwardOutlined color='error' />, name: 'Adicionar despesa', onClick: () => push('/financas/despesas') },
    { icon: <ArrowUpwardOutlined color='success' />, name: 'Adicionar receita', onClick: () => push('/financas/receitas') },
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
  )
};
