import { Wrapper } from "./Box.styled";

type BoxProps = {
  children: React.ReactNode;
};

export const Box = ({ children }: BoxProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
