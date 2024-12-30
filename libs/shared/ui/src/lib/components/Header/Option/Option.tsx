import { OptionButton } from "./Option.styled";
import { MenuLinksProps } from "../../../patterns/Menu/types";

type OptionProps = {
  option: MenuLinksProps;
  isOpen: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
}

export const Option = ({ option, isOpen = false, onClick, onClose }: OptionProps) => {
  return (
    <OptionButton
      id="header-option-button"
      aria-controls={isOpen ? 'header-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={isOpen ? 'true' : undefined}
      // href={option.link}
      onMouseEnter={onClick}
      // onMouseLeave={onClose}
      // onClick={onClick}
    >
      {option.title}
    </OptionButton>
  )
}
