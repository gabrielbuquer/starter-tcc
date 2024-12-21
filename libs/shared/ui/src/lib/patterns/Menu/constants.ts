import { MenuLinksProps } from "./types";


export const MENU_LINKS: MenuLinksProps[] = [
  {
    title: 'Início',
    link: '/',
    submenu: [],
  },
  {
    title: 'Cursos',
    link: '/cursos',
    submenu: [],
  },
  {
    title: 'Finanças',
    link: '/financas',
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
  }
]
