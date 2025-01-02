import { MenuLinksProps } from "./types";

import { HomeOutlined, SchoolOutlined, AutoStoriesOutlined, AccountBalanceWalletOutlined, Home } from '@mui/icons-material';

export const MENU_LINKS: MenuLinksProps[] = [
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
      {
        title: 'Receitas',
        link: '/financas/receitas',
      },
      {
        title: 'Despesas',
        link: '/financas/despesas',
      },
      {
        title: 'Orçamento',
        link: '/financas/orcamento',
      }
    ],
  },
  {
    title: 'Professor',
    link: '/professor',
    icon: <SchoolOutlined />,
    submenu: [
      {
        title: 'Gestão de Aula',
        link: '/professor/aulas',
      },
      {
        title: 'Gestão de Alunos',
        link: '/professor/alunos',
      }
    ],
  }
]
