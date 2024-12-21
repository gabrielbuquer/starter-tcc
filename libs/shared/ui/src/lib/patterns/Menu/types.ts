export type MenuLinksProps = {
  title: string;
  link: string;
  submenu?: Omit<MenuLinksProps, 'submenu'>[];
}
