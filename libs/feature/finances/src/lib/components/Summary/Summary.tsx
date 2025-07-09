import { Typography } from '@mui/material';

import { Container, TextWrapper } from './Summary.styled';

export type SummaryProps = {
  title?: string;
  content?: string;
  icon: JSX.Element;
  onClick?: () => void;
};

export const Summary = ({ title, content, icon, onClick }: SummaryProps) => {
  return (
    <Container onClick={onClick ? () => onClick?.() : undefined}>
      <TextWrapper>
        {title ? <Typography variant="caption">{title}</Typography> : null}
        {content ? <Typography variant="h3">{content}</Typography> : null}
      </TextWrapper>
      {icon}
    </Container>
  );
};
