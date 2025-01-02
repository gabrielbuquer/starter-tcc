export type MenuLinksProps = {
  title: string;
  link: string;
  icon?: JSX.Element;
  submenu?: Omit<MenuLinksProps, 'submenu'>[];
}
