import {
  AccountBalanceWalletOutlined,
  AutoStoriesOutlined,
  HomeOutlined,
  SchoolOutlined,
} from '@mui/icons-material';

import { MenuLinksProps } from './types';

export const getMenuLinks = (
  role?: 'teacher' | 'student',
): MenuLinksProps[] => {
  const links: MenuLinksProps[] = [
    {
      title: 'Início',
      link: '/',
      icon: <HomeOutlined />,
      submenu: [],
    },
    {
      title: 'Cursos',
      link: '/cursos',
      icon: <AutoStoriesOutlined />,
      submenu: [],
    },
    {
      title: 'Finanças',
      link: '/financas',
      icon: <AccountBalanceWalletOutlined />,
      submenu: [
        { title: 'Transações', link: '/financas/transacoes' },
        { title: 'Receitas', link: '/financas/receitas' },
        { title: 'Despesas', link: '/financas/despesas' },
        { title: 'Metas', link: '/financas/metas' },
      ],
    },
  ];

  if (role === 'teacher') {
    links.push({
      title: 'Professor',
      link: '/professor',
      icon: <SchoolOutlined />,
      submenu: [
        { title: 'Gestão de Aula', link: '/professor/aulas' },
        { title: 'Gestão de Alunos', link: '/professor/alunos' },
      ],
    });
  }

  return links;
};
