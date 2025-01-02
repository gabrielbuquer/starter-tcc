export type MenuLinksProps = {
  title: string;
  link: string;
  icon?: any;
  submenu?: Omit<MenuLinksProps, 'submenu'>[];
}
