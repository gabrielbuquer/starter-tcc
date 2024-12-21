import { MenuOption } from "./MenuOption";
import { MenuLinksProps } from "../types";
import { Container } from "./MenuDesktop.styled";

type MenuDesktopProps = {
  content: MenuLinksProps[];
}

export const MenuDesktop = ({ content }: MenuDesktopProps) => {
  return (
    <Container>
      {content.map((item) => <MenuOption key={item.title} {...item} />)}
    </Container>
  );
}
