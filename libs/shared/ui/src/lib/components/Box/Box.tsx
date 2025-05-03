import { Typography } from "@mui/material";
import { Container, Wrapper } from "./Box.styled";

type BoxProps = {
  children: React.ReactNode;
  title?: string
};

export const Box = ({ children, title }: BoxProps) => {
  return (
    <Container>
      {title && (
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
      )}
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
};
